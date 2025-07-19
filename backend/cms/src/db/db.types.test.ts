import type { Index } from "types/index";
import type { User } from "types/user";

import { indexesTable, usersTable } from "./db.schema";

usersTable.$inferSelect satisfies User;
indexesTable.$inferSelect satisfies Index;
