import { eq, isNull } from "drizzle-orm";

import { Repository } from "../../core/repository";
import { indexesTable } from "../../db/db.schema";
import { takeFirstOrThrow } from "../../utility/db";

class IndexRepository extends Repository {
  async createIndex({ name }: { name: string }) {
    const index = await this.db
      .insert(indexesTable)
      .values({ name })
      .returning()
      .then(takeFirstOrThrow);
    return index;
  }

  async getIndexes() {
    const indexes = await this.db
      .select()
      .from(indexesTable)
      .where(isNull(indexesTable.deletedAt));
    return indexes;
  }

  async getIndex({ indexId }: { indexId: number }) {
    const index = await this.db
      .select()
      .from(indexesTable)
      .where(eq(indexesTable.id, indexId))
      .then(takeFirstOrThrow);
    return index;
  }

  async updateIndex({
    indexId,
    index,
  }: {
    indexId: number;
    index: {
      body?: string;
      name?: string;
    };
  }) {
    const updatedIndex = await this.db
      .update(indexesTable)
      .set(index)
      .where(eq(indexesTable.id, indexId))
      .returning();
    return updatedIndex;
  }
}

export { IndexRepository };
