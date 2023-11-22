import {
  PageContext,
  PageContextWithParams,
  PageContextWithoutParams,
} from "../../types/Page/PageContext";
import { PageObject, PageObjectWithParams } from "../types/PageObject";
import { pageObjectHasNoParams } from "./predicate";

export const getPageContext = (
  obj: PageObject,
  location: string,
  isMounting: boolean,
  params?: Record<string, string>,
  queryString?: string,
): typeof obj extends PageObjectWithParams<readonly string[]>
  ? PageContextWithParams<readonly string[]>
  : PageContextWithoutParams => {
  const status = isMounting
    ? obj.transition
      ? "mounting"
      : "mounted"
    : "unmounting";
  return {
    obj,
    props: {
      status,
      statusClass: status,
      location,
      params: pageObjectHasNoParams(obj) ? undefined : params,
      queryString,
    },
  };
};
