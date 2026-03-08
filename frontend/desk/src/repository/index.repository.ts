import type { Index } from "types/index";

import { cmsApi } from "@/api";

import { mutation, query } from "./_core";
import {
  CreateIndexInput,
  type IndexBodyQueryOutput,
  type IndexesQueryOutput,
  type IndexQueryOutput,
  UpdateIndexBodyInput,
  UpdateIndexInput,
} from "./index.dto";

const key = ["indexes"];
const prefix = "indexes";

// Query
const indexes = () =>
  query({
    queryKey: [...key],
    queryFn: () => cmsApi.get<IndexesQueryOutput>(prefix).json(),
  });

const index = (id: Index["id"]) =>
  query({
    queryKey: [...key, { indexId: id }],
    queryFn: () => cmsApi.get<IndexQueryOutput>(`${prefix}/${id.toString()}`).json(),
  });

const body = (id: Index["id"]) =>
  query({
    queryKey: [...key, { indexId: id }],
    queryFn: () => cmsApi.get<IndexBodyQueryOutput>(`${prefix}/${id.toString()}/body`).json(),
  });

export const indexQuery = {
  indexes,
  index,
  body,
};

// Mutation
const create = (json: CreateIndexInput) =>
  mutation({
    mutationKey: [...key],
    mutationFn: () => cmsApi.post<{ index: Index }>(prefix, { json }).json(),
  });

const update = (id: Index["id"], json: UpdateIndexInput) =>
  mutation({
    mutationKey: [...key, { indexId: id }],
    mutationFn: () => cmsApi.put<{ index: Index }>(`${prefix}/${id.toString()}`, { json }).json(),
  });

const updateBody = (id: Index["id"]) =>
  mutation({
    mutationKey: [...key, { indexId: id }],
    mutationFn: (json: UpdateIndexBodyInput) =>
      cmsApi.patch<{ index: Index }>(`${prefix}/${id.toString()}/body`, { json }).json(),
  });

export const indexMutation = {
  create,
  update,
  updateBody,
};
