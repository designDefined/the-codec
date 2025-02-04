import { Router } from "express";
import { wrap } from "../../utility/wrap";
import { DataHandler } from "../../data";
import { Index } from "@core/entity/index/Index";
import { IndexSummary } from "@core/entity/index/IndexSummary";
import { generateIndexId } from "./utility";
import { createOuterBox } from "../box/utility";

export const IndexRouter = Router();

IndexRouter.get(
  "/",
  wrap(async (_, res) => {
    const dir = await DataHandler.readdir("/idx");
    const data = await Promise.all(dir.map(f => DataHandler.read(`/idx/${f}/summary.json`)));
    res.send(data);
  }),
);

IndexRouter.get(
  "/:id",
  wrap(async (req, res) => {
    const data = await DataHandler.read(`/idx/${req.params.id}/data.json`);
    res.send(data);
  }),
);

IndexRouter.get(
  "/:id/summary",
  wrap(async (req, res) => {
    const data = await DataHandler.read(`/idx/${req.params.id}/summary.json`);
    res.send(data);
  }),
);

IndexRouter.post(
  "/",
  wrap(async (req, res) => {
    const ids = await DataHandler.readdir("/idx");
    const id = generateIndexId(ids);
    const timestamp = Date.now();
    const title = req.body.title;
    const content = createOuterBox();
    const summary: IndexSummary = { id, title, createdAt: timestamp, ...req.body } as Index;
    const data: Index = { ...summary, content };

    await DataHandler.write(`/idx/${id}/data.json`, data);
    await DataHandler.write(`/idx/${id}/summary.json`, summary);
    res.send({ success: true, id });
  }),
);

IndexRouter.patch(
  "/:id",
  wrap(async (req, res) => {
    const prev = await DataHandler.read(`/idx/${req.params.id}/data.json`);
    if (!prev) throw new Error("Not found");

    const timestamp = Date.now();
    const data = { ...prev, ...req.body, updatedAt: timestamp } as Index;
    const summary: IndexSummary = {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      createdAt: data.createdAt,
      updatedAt: timestamp,
    };
    await DataHandler.write(`/idx/${req.params.id}/data.json`, data);
    await DataHandler.write(`/idx/${req.params.id}/summary.json`, summary);
    res.send({ data, summary });
  }),
);
