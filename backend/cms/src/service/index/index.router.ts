import { Hono } from "hono";

import { db } from "../../db";
import { integerId } from "../../utility/parameter";
import { IndexRepository } from "./index.repository";
import {
  type DeleteIndexRes,
  type DeleteIndexSlugRes,
  type GetIndexBodyRes,
  type GetIndexesRes,
  type GetIndexRes,
  type GetIndexSlugsRes,
  PatchIndexBodyReq,
  type PatchIndexBodyRes,
  PatchIndexReq,
  type PatchIndexRes,
  PatchIndexSlugReq,
  type PatchIndexSlugRes,
  PostIndexReq,
  type PostIndexRes,
  PostIndexSlugReq,
  type PostIndexSlugRes,
} from "./index.types";
import { IndexBodyRepository } from "./index-body.repository";
import { IndexSlugRepository } from "./index-slug.repository";

const indexPrefix = "/indexes";
const indexRouter = new Hono();

const indexRepository = new IndexRepository(db);
const indexBodyRepository = new IndexBodyRepository(db);
const indexSlugRepository = new IndexSlugRepository(db);

indexRouter.get("/", async c => {
  const indexes = await indexRepository.readIndexes();

  return c.json<GetIndexesRes>({
    indexes,
  });
});

indexRouter.get("/:indexId", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const index = await indexRepository.readIndex({ indexId });

  return c.json<GetIndexRes>({
    index,
  });
});

indexRouter.get("/:indexId/body", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const { body } = await indexBodyRepository.readIndexBodyByIndexId({
    indexId,
  });

  return c.json<GetIndexBodyRes>({
    body,
  });
});

indexRouter.get("/:indexId/slugs", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const slugs = await indexSlugRepository.readSlugsByIndexId({ indexId });

  return c.json<GetIndexSlugsRes>({
    slugs,
  });
});

indexRouter.post("/", async c => {
  const payload = await c.req.json().then(payload => PostIndexReq.parse(payload));

  const index = await db.transaction(
    async tx => {
      const indexRepository = new IndexRepository(tx);
      const indexBodyRepository = new IndexBodyRepository(tx);
      const index = await indexRepository.createIndex(payload);
      await indexBodyRepository.createIndexBody({ indexId: index.id });
      return index;
    },
    { isolationLevel: "serializable" },
  );

  return c.json<PostIndexRes>({
    index,
  });
});

indexRouter.post("/:indexId/slugs", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const payload = await c.req.json().then(payload => PostIndexSlugReq.parse(payload));

  const { id, slug, type, updatedAt } = await indexSlugRepository.createSlug({
    indexId,
    slug: payload.slug,
    type: payload.type,
  });
  const index = await indexRepository.updateIndex({
    indexId,
    index: {},
    updatedAt: updatedAt,
  });

  return c.json<PostIndexSlugRes>({
    index,
    slug: { id, slug, type },
  });
});

indexRouter.patch("/:indexId", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const payload = await c.req.json().then(payload => PatchIndexReq.parse(payload));

  const index = await indexRepository.updateIndex({
    indexId,
    index: payload,
  });

  return c.json<PatchIndexRes>({
    index,
  });
});

indexRouter.patch("/:indexId/body", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const payload = await c.req.json().then(payload => PatchIndexBodyReq.parse(payload));

  const { body, updatedAt } = await indexBodyRepository.updateIndexBody({
    indexId,
    body: payload.body,
  });
  const index = await indexRepository.updateIndex({
    indexId,
    index: {},
    updatedAt,
  });

  return c.json<PatchIndexBodyRes>({
    index,
    body,
  });
});

indexRouter.patch("/:indexId/slugs/:slugId", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const slugId = integerId.parse(c.req.param("slugId"));
  const payload = await c.req.json().then(payload => PatchIndexSlugReq.parse(payload));

  const { id, slug, type, updatedAt } = await indexSlugRepository.updateSlug({
    indexId,
    slugId,
    slug: payload.slug,
  });
  const index = await indexRepository.updateIndex({
    indexId,
    index: {},
    updatedAt: updatedAt,
  });

  return c.json<PatchIndexSlugRes>({
    index,
    slug: { id, slug, type },
  });
});

indexRouter.delete("/:indexId", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const deletedAt = new Date();

  const success = await db.transaction(
    async tx => {
      const indexRepository = new IndexRepository(tx);
      const indexBodyRepository = new IndexBodyRepository(tx);
      const indexSlugRepository = new IndexSlugRepository(tx);
      const indexDeleted = await indexRepository.deleteIndex({
        indexId,
        deletedAt,
      });
      await indexBodyRepository.deleteIndexBody({ indexId, deletedAt });
      await indexSlugRepository.deleteSlugsByIndexId({ indexId, deletedAt });
      return indexDeleted;
    },
    { isolationLevel: "serializable" },
  );

  return c.json<DeleteIndexRes>({
    success,
  });
});

indexRouter.delete("/:indexId/slugs/:slugId", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const slugId = integerId.parse(c.req.param("slugId"));
  const deletedAt = new Date();

  const success = await indexSlugRepository.deleteSlug({
    indexId,
    slugId,
    deletedAt,
  });

  return c.json<DeleteIndexSlugRes>({
    success,
  });
});

export { indexPrefix, indexRouter };
