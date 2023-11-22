import { DynamicPageIndex, PageIndex } from "../../types/Page/PageIndex";
import { RouteTree } from "../../types/RouteTree";
import { SearchResult } from "../../types/SearchResult";
import { isDynamicPageIndex } from "../predicate/isDynamicPage";
import { isSubtree } from "../predicate/isSubtree";

const compareParamKeysAndPaths = (
  target: PageIndex | DynamicPageIndex,
  remainingPaths: string[],
  errorIndex: PageIndex,
): SearchResult => {
  if (isDynamicPageIndex(target)) {
    if (remainingPaths.length === target.paramKeys.length) {
      const entries = target.paramKeys.map((param, index) => [
        param,
        remainingPaths[index],
      ]);
      return {
        status: "dynamic",
        result: target,
        params: Object.fromEntries(entries),
      };
    }
    // need params!
    return { status: "error", result: errorIndex };
  }
  if (remainingPaths.length > 0) {
    // paths are remaining
    return { status: "error", result: errorIndex };
  }
  // success
  return { status: "normal", result: target };
};

export const searchPageIndex = (
  target: RouteTree | PageIndex | DynamicPageIndex,
  remainingPaths: string[],
  errorIndex: PageIndex,
): SearchResult => {
  // target is page index
  if (!isSubtree(target))
    return compareParamKeysAndPaths(target, remainingPaths, errorIndex);

  // target is subtree
  const [nextPath, ...restPaths] = remainingPaths;
  const nextTarget = target[nextPath];
  const nextError = target._error ?? errorIndex;

  // there is next target
  if (nextTarget) {
    return searchPageIndex(nextTarget, restPaths, nextError);
  }

  // stop here
  return compareParamKeysAndPaths(target._index, remainingPaths, nextError);
};
