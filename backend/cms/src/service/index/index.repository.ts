import { and, eq, isNull } from "drizzle-orm";

import { Repository } from "../../core/repository";
import { indexesTable } from "../../db/db.schema";
import { takeFirstOrThrow } from "../../utility/db";

class IndexRepository extends Repository {
  async createIndex({ name }: { name: string }) {
    const index = await this.db.insert(indexesTable).values({ name }).returning().then(takeFirstOrThrow);
    return index;
  }

  async readIndexes() {
    const indexes = await this.db.select().from(indexesTable).where(isNull(indexesTable.deletedAt));
    return indexes;
  }

  async readIndex({ indexId }: { indexId: number }) {
    const index = await this.db
      .select()
      .from(indexesTable)
      .where(and(eq(indexesTable.id, indexId), isNull(indexesTable.deletedAt)))
      .then(takeFirstOrThrow);
    return index;
  }

  async updateIndex({
    indexId,
    index,
    updatedAt,
  }: {
    indexId: number;
    index: {
      name?: string;
      description?: string;
      content?: string;
    };
    updatedAt?: Date;
  }) {
    const updatedIndex = await this.db
      .update(indexesTable)
      .set({
        name: index.name,
        description: index.description,
        updatedAt: updatedAt ?? new Date(),
      })
      .where(and(eq(indexesTable.id, indexId), isNull(indexesTable.deletedAt)))
      .returning()
      .then(takeFirstOrThrow);
    return updatedIndex;
  }

  async deleteIndex({ indexId, deletedAt }: { indexId: number; deletedAt?: Date }) {
    const deletedIndex = await this.db
      .update(indexesTable)
      .set({
        deletedAt: deletedAt ?? new Date(),
      })
      .where(and(eq(indexesTable.id, indexId), isNull(indexesTable.deletedAt)));
    return !!deletedIndex.rowCount;
  }
}

export { IndexRepository };
