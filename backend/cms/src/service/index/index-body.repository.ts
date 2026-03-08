import { and, eq, isNull } from "drizzle-orm";

import { Repository } from "../../core/repository";
import { indexBodiesTable } from "../../db/db.schema";
import { takeFirstOrThrow } from "../../utility/db";

class IndexBodyRepository extends Repository {
  async createIndexBody({ indexId }: { indexId: number }) {
    return await this.db.insert(indexBodiesTable).values({ indexId });
  }

  async readIndexBodyByIndexId({ indexId }: { indexId: number }) {
    return await this.db
      .select()
      .from(indexBodiesTable)
      .where(and(eq(indexBodiesTable.indexId, indexId), isNull(indexBodiesTable.deletedAt)))
      .then(takeFirstOrThrow);
  }

  async updateIndexBody({ indexId, body }: { indexId: number; body: string }) {
    return await this.db
      .update(indexBodiesTable)
      .set({
        body,
        updatedAt: new Date(),
      })
      .where(and(eq(indexBodiesTable.indexId, indexId), isNull(indexBodiesTable.deletedAt)))
      .returning()
      .then(takeFirstOrThrow);
  }

  async deleteIndexBody({ indexId, deletedAt }: { indexId: number; deletedAt?: Date }) {
    const deletedIndexBody = await this.db
      .update(indexBodiesTable)
      .set({
        deletedAt: deletedAt ?? new Date(),
      })
      .where(and(eq(indexBodiesTable.indexId, indexId), isNull(indexBodiesTable.deletedAt)));
    return !!deletedIndexBody.rowCount;
  }
}

export { IndexBodyRepository };
