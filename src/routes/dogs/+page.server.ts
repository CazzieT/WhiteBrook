import { db } from "$lib/server/db";
import { dog } from "$lib/server/schema";
import type { PageServerLoad } from "./$types";

// Show the different dogs from the server
export const load: PageServerLoad = async () => {
    const dogs = await db.select().from(dog);

	return {
		dogs: dogs
	};
};