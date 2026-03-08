import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "../env";

const pool = new Pool({
  connectionString: env.POSTGRES_DB_URL,
});

const db = drizzle(pool, {
  casing: "snake_case",
});

export { db };
