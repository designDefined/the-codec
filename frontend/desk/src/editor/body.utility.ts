import { nanoid } from "nanoid";
import type { Descendant } from "slate";

export const stringifyBody = (body: Descendant[]): string => {
  return JSON.stringify(body);
};

export const parseBody = (body?: string): Descendant[] => {
  if (!body) return defaultInitialBody;

  const parsed = JSON.parse(body) as Descendant[];
  if (!Array.isArray(parsed)) return defaultInitialBody;
  if (parsed.length < 1) return defaultInitialBody;

  return parsed;
};

const defaultInitialBody: Descendant[] = [
  {
    id: nanoid(),
    type: "CONTAINER",
    layout: {
      f: true,
      py: 128,
      px: 128,
      g: 12,
    },
    children: [
      {
        id: nanoid(),
        type: "HEADING",
        level: 1,
        children: [{ text: "제목입니다", bold: true }],
      },
      {
        id: nanoid(),
        type: "PARAGRAPH",
        children: [{ text: "본문입니다." }],
      },
    ],
  },
];
