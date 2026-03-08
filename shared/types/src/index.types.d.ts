import type { Time, Times } from "./common.types";

interface Index extends Times {
  id: number;
  name: string;
  description: string | null;
  publishedAt: Time | null;
  unpublishedAt: Time | null;
}

export type { Index };
