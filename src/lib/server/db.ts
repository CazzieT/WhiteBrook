import { env } from "$env/dynamic/private";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
 
export const poolConnection = mysql.createPool({
  host: env.db_host,
  user: env.db_user,
  database: env.db_name,
  password: env.db_password
});
 
export const db = drizzle(poolConnection);
