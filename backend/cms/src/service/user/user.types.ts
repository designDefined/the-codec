import { z } from "zod";

const PostUserPayload = z.object({
  name: z.string(),
});

export { PostUserPayload };
