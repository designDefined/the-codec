import type { DbType } from "../db/db.types";

class Repository {
  constructor(readonly db: DbType) {}
}

export { Repository };
