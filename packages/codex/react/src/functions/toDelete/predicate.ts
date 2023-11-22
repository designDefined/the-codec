import { PageObject, PageObjectWithoutParams } from "../types/PageObject";
import { PageToRender, PageToRenderWithoutParams } from "../types/PageToRender";
import { RouteTree } from "../../types/RouteTree";

export const targetIsPageObject = (
  target: RouteTree | PageObject,
): target is PageObject => {
  return !Object.prototype.hasOwnProperty.call(target, "_index");
};

export const pageObjectHasNoParams = (
  pageObject: PageObject,
): pageObject is PageObjectWithoutParams => {
  return !Object.prototype.hasOwnProperty.call(pageObject, "params");
};

export const pageToRenderHasNoParams = (
  pageToRender: PageToRender,
): pageToRender is PageToRenderWithoutParams => {
  return !Object.prototype.hasOwnProperty.call(pageToRender, "parsedParams");
};
