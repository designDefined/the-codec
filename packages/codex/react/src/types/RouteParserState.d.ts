import { PathObject } from "./PathObject";
import { RouteTree } from "./RouteTree";

export type ParseSuccess = {
  status: "success";
  target: PathObject;
  error: null;
  params?: Record<string, string>;
  queryString?: string;
};

export type ParseFail = {
  status: "fail";
  target: null;
  error: PathObject;
};

export type Parsing = {
  status: "parsing";
  target: RouteTree | PathObject;
  remainingPaths: string[];
  nearestErrorPath?: PathObject;
  queryString?: string;
};
