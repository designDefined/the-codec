import { DynamicPageIndex, PageIndex } from "../../types/Page/PageIndex";
import { RouteTree } from "../../types/RouteTree";

export const isSubtree = (
  target: PageIndex | DynamicPageIndex | RouteTree,
): target is RouteTree => {
  return Object.prototype.hasOwnProperty.call(target, "_index");
};
