import type { Index } from "shared/types/src/index.types";
import type { Slug } from "shared/types/src/slug.types";
import { z } from "zod";

interface GetIndexesRes {
  indexes: Index[];
}
interface GetIndexRes {
  index: Index;
}
interface GetIndexBodyRes {
  body: string;
}
interface GetIndexSlugsRes {
  slugs: Slug[];
}

const PostIndexReq = z.object({
  name: z.string(),
});
type PostIndexReq = z.infer<typeof PostIndexReq>;
interface PostIndexRes {
  index: Index;
}

const PostIndexSlugReq = z.object({
  slug: z.string(),
  type: z.enum(["PUBLIC", "PRIVATE"]),
});
type PostIndexSlugReq = z.infer<typeof PostIndexSlugReq>;
interface PostIndexSlugRes {
  index: Index;
  slug: Slug;
}

const PatchIndexReq = z
  .object({
    name: z.string(),
    description: z.string(),
  })
  .partial();
type PatchIndexReq = z.infer<typeof PatchIndexReq>;
interface PatchIndexRes {
  index: Index;
}

const PatchIndexBodyReq = z.object({
  body: z.string(),
});
type PatchIndexBodyReq = z.infer<typeof PatchIndexBodyReq>;
interface PatchIndexBodyRes {
  index: Index;
  body: string;
}

const PatchIndexSlugReq = z.object({
  slug: z.string(),
});
type PatchIndexSlugReq = z.infer<typeof PatchIndexSlugReq>;
interface PatchIndexSlugRes {
  index: Index;
  slug: Slug;
}

type DeleteIndexRes = {
  success: boolean;
};
type DeleteIndexSlugRes = {
  success: boolean;
};

export {
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
};
