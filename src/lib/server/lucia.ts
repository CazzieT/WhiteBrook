import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { poolConnection } from "./db";
import { mysql2 } from "@lucia-auth/adapter-mysql";

export const auth = lucia({
	adapter: mysql2(poolConnection, {
        user: "auth_user",
        session: "user_session",
        key: "user_key",
    }),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),

	getUserAttributes: (data) => {
		return {
			firstname: data.firstname,
			lastname: data.lastname,
			email: data.email
		};
	}
});

export type Auth = typeof auth;
