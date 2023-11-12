import { ParsedRoute } from "./ParsedRoute";

export type RenderState =
  | { status: "a"; a: ParsedRoute; b: null }
  | { status: "b"; b: ParsedRoute; a: null }
  | {
      status: "toB" | "toA";
      a: ParsedRoute;
      b: ParsedRoute;
    };
