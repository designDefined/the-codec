import { DynamicPageIndex, PageIndex } from "./Page/PageIndex";
import { RouteTree } from "./RouteTree";

export type SearchResult =
  | {
      status: "normal";
      result: PageIndex;
    }
  | {
      status: "dynamic";
      result: DynamicPageIndex;
      params: Record<string, string>;
    }
  | {
      status: "error";
      result: PageIndex;
    };

export type Searching = {
  SubTree: RouteTree;
  pathHistory: string[];
  pathRemaining: string[];
};
