import { PageObject, PageObjectWithoutParams } from "./PageObject";

export type RouteTree = {
  _index: PageObject;
  _error?: PageObjectWithoutParams;
} & {
  [key: string]: RouteTree | PageObject;
};
