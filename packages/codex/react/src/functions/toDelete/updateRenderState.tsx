import { Action } from "history";
import { PageIndex } from "../../types/Page/PageIndex";
import { RenderState } from "../types/RenderState";

export const static = (
  currentState: RenderState,
  nextIndex: PageIndex,
  nextRenderSide: "a" | "b",
  location: string,
  action: Action,
): RenderState => {
  const { transition } = nextIndex;
  let contextToMount: RenderState["a"] = null;
  let contextToUnmount: RenderState["a"] = nextRenderSide==="a" ?;

  if (!transition) return currentState;
  if (transition.type === "instant") {
    contextToUnmount
  }
  return nextRenderSide === "a";
};
