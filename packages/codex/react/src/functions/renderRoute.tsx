import { ParsedRoute } from "../types/ParsedRoute";
import { RenderState } from "../types/RenderState";

export const renderRoute = (
  parsedRoute: ParsedRoute,
  previousState: RenderState | null,
): RenderState => {
  if (!previousState) {
    return {
      status: "a",
      a: parsedRoute,
      b: null,
    };
  }
  if (previousState.status === "a") {
    return {
      status: "b",
      a: null,
      b: parsedRoute,
    };
  } else {
    return {
      status: "a",
      a: parsedRoute,
      b: null,
    };
  }
};
