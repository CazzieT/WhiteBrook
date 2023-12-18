import type {  Actions,PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { dog, request } from "$lib/server/schema";
import { sql } from "drizzle-orm";

// redirect to login if not inlogged
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, "/login");

	return {
		userId: session.user.userId,
		username: session.user.firstname + " " + session.user.lastname,
		requests: await db.select().from(dog)
        .where(sql`${dog.id} in (select ${request.dog_id} from ${request} where ${request.user_id} = ${session.user.userId})`),
	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, "/login"); // redirect to login page
	}
};