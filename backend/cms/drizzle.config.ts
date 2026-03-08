import { defineConfig } from "drizzle-kit";

import { env } from "./src/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/db.schema.ts",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: env.POSTGRES_DB_URL,
  },
});
