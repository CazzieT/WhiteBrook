import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import { insertUserSchema } from "$lib/server/schema"; 


import type { Actions, PageServerLoad } from "./$types";

// checks session
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/");
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formdata = await request.formData();
        const firstname = formdata.get("fname")?.valueOf();
        const lastname = formdata.get("lname")?.valueOf();
        const email = formdata.get("email")?.valueOf();
        const password = formdata.get("password")?.valueOf();
		// basic check
		const parse = await insertUserSchema.safeParseAsync({
			firstname,
			lastname,
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
			||firstname === undefined
			||lastname === undefined
			||email === undefined
			) {
				return fail(400, {
					message: "I have no idea how you managed to get here."
				});
			}
		
		try {
			const user = await auth.createUser({
				key: {
					providerId: "email", // auth method
					providerUserId: email.toString().toLowerCase(), 
					password: password.toString() 
				},
				attributes: {
					firstname: firstname.toString(),
					lastname: lastname.toString(),
					email: email.toString()
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e: any) {
			if (
				e.code === "ER_DUP_ENTRY"
			) {
				return fail(400, {
					message: "An account with this Email already excist"
				});
			}
			return fail(500, {
				message: "An unknown error occurred"
			});
		}
		throw redirect(302, "/");
	}
};