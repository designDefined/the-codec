import { z } from "zod";

const PostIndexPayload = z.object({
  name: z.string(),
});
type PostIndexPayload = z.infer<typeof PostIndexPayload>;

const PatchIndexPayload = z
  .object({
    name: z.string(),
    body: z.string(),
  })
  .partial();
type PatchIndexPayload = z.infer<typeof PatchIndexPayload>;

export { PatchIndexPayload, PostIndexPayload };
