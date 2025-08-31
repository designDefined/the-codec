import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * varchar lengths
 */
const SHORT = 50;
const MEDIUM = 200;
const LONG = 2000;
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
    description: varchar({ length: LONG }),
    ...timestamps,
    publishedAt: timestamp(),
    unpublishedAt: timestamp(),
  },
  table => [
    index().on(table.name),
    index().on(table.createdAt),
    index().on(table.updatedAt),
    index().on(table.publishedAt),
    index().on(table.unpublishedAt),
  ],
);

export const indexBodiesTable = pgTable(
  "index_bodies",
  {
    id: serial().primaryKey(),
    indexId: integer()
      .notNull()
      .references(() => indexesTable.id),
    body: text().notNull().default(""),
    ...timestamps,
  },
  table => [
    index().on(table.indexId),
    index().on(table.createdAt),
    index().on(table.updatedAt),
  ],
);

export const indexSlugsTable = pgTable(
  "index_slugs",
  {
    id: serial().primaryKey(),
    indexId: integer()
      .notNull()
      .references(() => indexesTable.id),
    slug: varchar({ length: MEDIUM }).notNull().unique(),
    type: varchar({
      enum: ["PUBLIC", "PRIVATE"],
      length: SHORT,
    }).notNull(),
    ...timestamps,
  },
  table => [
    index().on(table.indexId),
    index().on(table.slug),
    index().on(table.createdAt),
    index().on(table.updatedAt),
  ],
);
