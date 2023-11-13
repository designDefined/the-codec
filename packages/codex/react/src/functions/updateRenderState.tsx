import { ReactNode } from "react";
import { RenderState } from "../types/RenderState";
import { ParseFail, ParseSuccess } from "../types/RouteParserState";
import { pageObjectHasNoParams } from "./predicate";

export const updateRenderState = (
  result: ParseSuccess | ParseFail,
  previousState: RenderState | null,
  location: string,
): RenderState => {
  let page: ReactNode = null;
  if (result.status === "success") {
    const { target, params, queryString } = result;
    if (pageObjectHasNoParams(target)) {
      page = target.component({
        status: "mounted",
        location,
        queryString,
      });
    } else {
      const assuredParams = params as Record<string, string>;
      page = target.component({
        status: "mounted",
        location,
        queryString,
        params: assuredParams,
      });
    }
  } else {
    const { error } = result;
    page = error.component({
      status: "mounted",
      location,
    });
  }

  if (!previousState)
    return {
      status: "a",
      a: page,
      b: null,
    };

  if (previousState.status === "a") {
    return {
      status: "b",
      a: null,
      b: page,
    };
  } else {
    return {
      status: "a",
      a: page,
      b: null,
    };
  }
};
