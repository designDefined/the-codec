import { Hono } from "hono";

import { db } from "../../db";
import { integerId } from "../../utility/parameter";
import { IndexRepository } from "./index.repository";
import { PatchIndexPayload, PostIndexPayload } from "./index.types";

const indexRouter = new Hono();
const indexRepository = new IndexRepository(db);

indexRouter.get("/", async c => {
  const indexes = await indexRepository.getIndexes();

  return c.json({ indexes });
});

indexRouter.get("/:indexId", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const index = await indexRepository.getIndex({ indexId });

  return c.json({ index });
});

indexRouter.post("/", async c => {
  const payload = await c.req
    .json()
    .then(payload => PostIndexPayload.parse(payload));

  const index = await indexRepository.createIndex(payload);

  return c.json({ index });
});

indexRouter.patch("/:indexId", async c => {
  const indexId = integerId.parse(c.req.param("indexId"));
  const payload = await c.req
    .json()
    .then(payload => PatchIndexPayload.parse(payload));

  const index = await indexRepository.updateIndex({
    indexId,
    index: payload,
  });

  return c.json({ index });
});

export { indexRouter };
