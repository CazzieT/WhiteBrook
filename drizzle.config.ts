import type { Config } from "drizzle-kit";

export default {
    schema: "./src/lib/server/schema.ts",
    out: "./drizzle",
    breakpoints: false
} satisfies Config;