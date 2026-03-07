import type { Index } from "shared/types/src/index.types";
import type { Slug } from "shared/types/src/slug.types";
import z from "zod";

// Query
export type IndexesQueryOutput = {
  indexes: Index[];
};

export type IndexQueryOutput = {
  index: Index;
};

export type IndexBodyQueryOutput = {
  body: string;
};

export type IndexSlugsQueryOutput = {
  slugs: Slug[];
};

// Mutation
export const CreateIndexInput = z.object({
  name: z.string(),
});
export type CreateIndexInput = z.infer<typeof CreateIndexInput>;

export type CreateIndexOutput = {
  index: Index;
};

export const CreateIndexSlugInput = z.object({
  slug: z.string(),
  type: z.enum(["PUBLIC", "PRIVATE"]),
});
export type CreateIndexSlugInput = z.infer<typeof CreateIndexSlugInput>;

export type CreateIndexSlugOutput = {
  index: Index;
  slug: Slug;
};

export const UpdateIndexInput = z
  .object({
    name: z.string(),
    description: z.string(),
    content: z.string(),
  })
  .partial();
export type UpdateIndexInput = z.infer<typeof UpdateIndexInput>;

export type UpdateIndexOutput = {
  index: Index;
};

export const UpdateIndexBodyInput = z.object({
  body: z.string(),
});
export type UpdateIndexBodyInput = z.infer<typeof UpdateIndexBodyInput>;

export type UpdateIndexBodyOutput = {
  index: Index;
  body: string;
};

export const UpdateIndexSlugInput = z.object({
  slug: z.string(),
});
export type UpdateIndexSlugInput = z.infer<typeof UpdateIndexSlugInput>;

export type UpdateIndexSlugOutput = {
  index: Index;
  slug: Slug;
};

export type DeleteIndexOutput = {
  success: boolean;
};

export type DeleteIndexSlugOutput = {
  success: boolean;
};
