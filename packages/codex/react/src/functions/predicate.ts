import { PathObject } from "../types/PathObject";
import { RouteTree } from "../types/RouteTree";

export const targetIsPathObject = (
  target: RouteTree | PathObject,
): target is PathObject => {
  return !Object.prototype.hasOwnProperty.call(target, "_index");
};
