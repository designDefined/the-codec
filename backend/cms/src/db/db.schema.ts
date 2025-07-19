import {
  index,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * varchar lengths
 */
// const SHORT = 50;
const MEDIUM = 200;
// const LONG = 2000;
// const EMAIL = 254;
// const URL = 2048;

/**
 * timestamps
 */
const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
};

/**
 * tables
 */
export const usersTable = pgTable(
  "users",
  {
    id: serial().primaryKey(),
    name: varchar({ length: MEDIUM }).notNull(),
    ...timestamps,
  },
  table => [
    index().on(table.id),
    index().on(table.name),
    index().on(table.createdAt),
    index().on(table.updatedAt),
  ],
);

export const indexesTable = pgTable(
  "indexes",
  {
    id: serial().primaryKey(),
    name: varchar({ length: MEDIUM }).notNull(),
    body: text(),
    ...timestamps,
    publishedAt: timestamp(),
    unpublishedAt: timestamp(),
  },
  table => [
    index().on(table.id),
    index().on(table.name),
    index().on(table.createdAt),
    index().on(table.updatedAt),
    index().on(table.publishedAt),
    index().on(table.unpublishedAt),
  ],
);
