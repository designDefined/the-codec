type SLUG_TYPE = "PUBLIC" | "PRIVATE";

interface Slug {
  id: number;
  slug: string;
  type: SLUG_TYPE;
}

export type { Slug, SLUG_TYPE };
