import { PageObject, PageObjectWithoutParams } from "./PageObject";
import { RouteTree } from "./RouteTree";

export type ParseSuccess = {
  status: "success";
  target: PageObject;
  error: null;
  params?: Record<string, string>;
  queryString?: string;
};

export type ParseFail = {
  status: "fail";
  target: null;
  error: PageObjectWithoutParams;
};

export type Parsing = {
  status: "parsing";
  target: RouteTree | PageObject;
  remainingPaths: string[];
  nearestErrorPath?: PageObjectWithoutParams;
  queryString?: string;
};
