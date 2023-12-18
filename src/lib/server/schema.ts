import { mysqlTable, bigint, varchar, unique } from "drizzle-orm/mysql-core";
import { z } from "zod";

export const insertUserSchema = z.object({
	email: z.string()
	.email({message: "Please enter a valid email"}),
	firstname: z.string()
	.min(1, {message: "You need to enter a firstname"})
	.max(40, {message: "Firstname can't be longer then 40 characters"}),
	lastname: z.string()
	.min(1,{message: " You need to enter a lastname"})
	.max(50, {message: "Your lastname can't be longer then 40 characters"}),
	password: z.string()
	.min(6, "Password need to be atleast 6 characters")
	.max(64, "Password need to be under 64 characters")
	.regex(/[A-Z]/, {message:" Password must include uppercase letter"})
	.regex(/[a-z]/, {message: "Password must include lowercase letters"})
	.regex(/[0-9]/, {message: " Password must include number"}),
});

export const user = mysqlTable("auth_user", {
	id: varchar("id", {
		length: 255
	}).primaryKey(),
	email: varchar("email", { length: 255 }).unique(),
	firstname: varchar("firstname", { length: 255 }),
	lastname: varchar("lastname", { length:255}),
});

export const key = mysqlTable("user_key", {
	id: varchar("id", {
		length: 255
	}).primaryKey(),
	userId: varchar("user_id", {
		length: 15
	})
		.notNull()
		.references(() => user.id),
	hashedPassword: varchar("hashed_password", {
		length: 255
	})
});

export const session = mysqlTable("user_session", {
	id: varchar("id", {
		length: 128
	}).primaryKey(),
	userId: varchar("user_id", {
		length: 15
	})
		.notNull()
		.references(() => user.id),
	activeExpires: bigint("active_expires", {
		mode: "number"
	}).notNull(),
	idleExpires: bigint("idle_expires", {
		mode: "number"
	}).notNull()
});

export const dog = mysqlTable("dog",{
	id: bigint("id", {
		mode: "number"
	}).primaryKey().autoincrement(),
	name: varchar("name",{length: 32}),
	imgUrl: varchar("imgUrl", {length: 255}),
	description: varchar("description", {length: 255})
});

export const request = mysqlTable("request",{
	user_id: varchar("user_id", { length:255 }).references(() => user.id),
	dog_id: bigint("dog_id",{ mode: "number" }).references(() => dog.id),
},
(t) => ({
	unq: unique().on(t.user_id, t.dog_id),
}));