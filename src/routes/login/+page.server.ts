import { auth } from "$lib/server/lucia";
import { LuciaError } from "lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { insertUserSchema } from "$lib/server/schema";

// check session if you logged in
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formdata = await request.formData();
        const email = formdata.get("email")?.valueOf();
        const password = formdata.get("password")?.valueOf();
		// basic check
		const parse = await insertUserSchema.safeParseAsync({
			firstname: "fake",
			lastname: "fake",
			email,
			password
		});
		if (!parse.success) {
			const errors = parse.error.flatten().fieldErrors;
			return fail(400,{
				errors
			});
		}
		if ( email === undefined
			||password === undefined
			) {
				return fail(400, {
					message: "I have no idea how you managed to get here."
				});
			}
		
		try {
			// find user by key
			// and validate password
			const key = await auth.useKey(
				"email",
				email.toString().toLowerCase(),
				password.toString()
			);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === "AUTH_INVALID_KEY_ID" ||
					e.message === "AUTH_INVALID_PASSWORD")
			) {
				// user does not exist
				// or invalid password
				return fail(400, {
					message: "Incorrect username or password"
				});
			}
			return fail(500, {
				message: "An unknown error occurred"
			});
		}
		// redirect to
		// make sure you don't throw inside a try/catch block!
		throw redirect(302, "/");
	}
};