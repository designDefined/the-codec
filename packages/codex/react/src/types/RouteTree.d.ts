import { PathObject } from "./PathObject";

export type RouteTree = {
  _index: PathObject;
  _error?: PathObject;
} & {
  [key: string]: RouteTree | PathObject;
};
