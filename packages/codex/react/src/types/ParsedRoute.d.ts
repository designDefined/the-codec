import { PathObject } from "./PathObject";

export type ParsedRoute = {
  component: PathObject["component"];
  pathObject: PathObject;
  params?: Record<string, string>;
  queryString?: string;
};
