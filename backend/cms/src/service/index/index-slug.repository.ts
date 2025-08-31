import { and, eq, isNull } from "drizzle-orm";
import type { Index } from "shared/types/src/index.types";
import type { Slug, SLUG_TYPE } from "shared/types/src/slug.types";

import { Repository } from "../../core/repository";
import { indexSlugsTable } from "../../db/db.schema";
import { takeFirstOrThrow } from "../../utility/db";

class IndexSlugRepository extends Repository {
  async createSlug({
    indexId,
    slug,
    type,
  }: {
    indexId: Index["id"];
    slug: string;
    type: SLUG_TYPE;
  }) {
    return await this.db
      .insert(indexSlugsTable)
      .values({
        indexId,
        slug,
        type,
      })
      .returning()
      .then(takeFirstOrThrow);
  }

  async readSlugsByIndexId({ indexId }: { indexId: Index["id"] }) {
    return await this.db
      .select()
      .from(indexSlugsTable)
      .where(
        and(
          eq(indexSlugsTable.indexId, indexId),
          isNull(indexSlugsTable.deletedAt),
        ),
      );
  }

  async updateSlug({
    indexId,
    slugId,
    slug,
  }: {
    indexId: Index["id"];
    slugId: Slug["id"];
    slug: string;
  }) {
    return await this.db
      .update(indexSlugsTable)
      .set({
        slug,
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(indexSlugsTable.indexId, indexId),
          eq(indexSlugsTable.id, slugId),
          isNull(indexSlugsTable.deletedAt),
        ),
      )
      .returning()
      .then(takeFirstOrThrow);
  }

  async deleteSlug({
    indexId,
    slugId,
    deletedAt,
  }: {
    indexId: Index["id"];
    slugId: Slug["id"];
    deletedAt?: Date;
  }) {
    const deletedSlug = await this.db
      .update(indexSlugsTable)
      .set({
        deletedAt: deletedAt ?? new Date(),
      })
      .where(
        and(
          eq(indexSlugsTable.indexId, indexId),
          eq(indexSlugsTable.id, slugId),
          isNull(indexSlugsTable.deletedAt),
        ),
      );
    return !!deletedSlug.rowCount;
  }

  async deleteSlugsByIndexId({
    indexId,
    deletedAt,
  }: {
    indexId: Index["id"];
    deletedAt?: Date;
  }) {
    const deletedSlugs = await this.db
      .update(indexSlugsTable)
      .set({
        deletedAt: deletedAt ?? new Date(),
      })
      .where(
        and(
          eq(indexSlugsTable.indexId, indexId),
          isNull(indexSlugsTable.deletedAt),
        ),
      );
    return !!deletedSlugs.rowCount;
  }
}

export { IndexSlugRepository };
