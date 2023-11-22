import { PageIndex, DynamicPageIndex } from "./Page/PageIndex";

export type RouteTree = {
  _index: PageIndex | DynamicPageIndex;
  _error?: PageIndex;
} & {
  [key: string]: RouteTree | PageIndex;
};
