import type { LayoutServerLoad } from "./$types";

//Expose current user to ever page
export const load: LayoutServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    return { user: session?.user }
}