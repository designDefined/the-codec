import { DynamicPageIndex, PageIndex } from "../../types/Page/PageIndex";

export const isDynamicPageIndex = (
  target: PageIndex | DynamicPageIndex,
): target is DynamicPageIndex => {
  return Object.prototype.hasOwnProperty.call(target, "paramKeys");
};
