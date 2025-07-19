import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  // General
  PORT: z.coerce.number(),

  // DB
  POSTGRES_PORT: z.coerce.number(),
  POSTGRES_DB: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB_URL: z.string(),
});

const env = envSchema.parse(process.env);

export { env };
