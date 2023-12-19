import { db } from "$lib/server/db";
import { dog, request } from "$lib/server/schema";
import { and, eq } from "drizzle-orm";
import type { Actions, PageServerLoad } from './$types';
import { fail } from "@sveltejs/kit";

// Get the dog from the id in the url
export const load: PageServerLoad =  async ({ params }) => {
    const id = Number(params.id);
    const dogs = await db.select().from(dog).where(eq(dog.id, id));

	return {
		dog: dogs[0]
	};
};

// request dog
export const actions = {
	default: async ({ params, locals }) => {
        const id = Number(params.id)
        const user = await locals.auth.validate();
        if (!user) {
            return fail(400, {
                message: "You need to be logged in to request a dog",
            });
        }
		try {
            await db.insert(request).values({
                dog_id: id,
                user_id: user.user.userId
            });
        } catch (error: any) {
            if (error.code = "ER_DUP_ENTRY") {
                return fail(400, {
                    message: "You have already booked this dog",
                });
            }
            return fail(500, {
                message: "An unknown error occured",
            });
        }
        
        return {
            success: "You have now sent in a request for this dog, you can view your pending requests on the profile page.",
        }
	},
} satisfies Actions;