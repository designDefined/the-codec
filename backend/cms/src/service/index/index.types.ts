import type { Index } from "shared/types/src/index.types";
import type { Slug } from "shared/types/src/slug.types";
import { z } from "zod";

export type GetIndexesRes = {
  indexes: Index[];
};
export type GetIndexRes = {
  index: Index;
};
export type GetIndexBodyRes = {
  body: string;
};
export type GetIndexSlugsRes = {
  slugs: Slug[];
};

export const PostIndexReq = z.object({
  name: z.string(),
});
export type PostIndexReq = z.infer<typeof PostIndexReq>;
export type PostIndexRes = {
  index: Index;
};

export const PostIndexSlugReq = z.object({
  slug: z.string(),
  type: z.enum(["PUBLIC", "PRIVATE"]),
});
export type PostIndexSlugReq = z.infer<typeof PostIndexSlugReq>;
export type PostIndexSlugRes = {
  index: Index;
  slug: Slug;
};

export const PatchIndexReq = z
  .object({
    name: z.string(),
    description: z.string(),
    content: z.string(),
  })
  .partial();
export type PatchIndexReq = z.infer<typeof PatchIndexReq>;
export type PatchIndexRes = {
  index: Index;
};

export const PatchIndexBodyReq = z.object({
  body: z.string(),
});
export type PatchIndexBodyReq = z.infer<typeof PatchIndexBodyReq>;
export type PatchIndexBodyRes = {
  index: Index;
  body: string;
};

export const PatchIndexSlugReq = z.object({
  slug: z.string(),
});
export type PatchIndexSlugReq = z.infer<typeof PatchIndexSlugReq>;
export type PatchIndexSlugRes = {
  index: Index;
  slug: Slug;
};

export type DeleteIndexRes = {
  success: boolean;
};
export type DeleteIndexSlugRes = {
  success: boolean;
};
