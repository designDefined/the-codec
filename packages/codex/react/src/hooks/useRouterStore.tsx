import { BrowserHistory, createBrowserHistory, parsePath } from "history";
import { create } from "zustand";
import { RouteTree } from "../types/RouteTree";
import { RenderState } from "../types/RenderState";
import { parseRoute } from "../functions/parseRoute";
import { parsePathname } from "../functions/parsePathname";
import { ParseFail, ParseSuccess } from "../types/RouteParserState";
import { updateRenderState } from "../functions/updateRenderState";

export type RouterStore = {
  data: RouteTree | null;
  history: BrowserHistory;
  provide: (data: RouteTree) => void;
  renderState: RenderState | null;
  actions: {
    navigate: (to: string) => void;
    back: () => void;
    forward: () => void;
  };
};

export const useRouterStore = create<RouterStore>()((set, get) => {
  const history = createBrowserHistory();

  /**
   * resolve is a internal function used inside the store.
   */
  const resolve = (result: ParseSuccess | ParseFail, location: string = "") => {
    const previousState = get().renderState;
    const newState = updateRenderState(result, previousState, location);
    set({ renderState: newState });
  };

  history.listen(({ location, action }) => {
    const routeTree = get().data;
    const { pathname, search } = parsePath(location.pathname);
    console.log("action: ", action);

    if (!routeTree) return;
    const parseResult = parseRoute({
      status: "parsing",
      target: routeTree,
      remainingPaths: parsePathname(pathname),
      queryString: search,
    });
    resolve(parseResult, pathname ?? "");
  });

  return {
    data: null,
    history,
    provide: (data) => {
      const { pathname, search } = parsePath(history.location.pathname);
      const parseResult = parseRoute({
        status: "parsing",
        target: data,
        remainingPaths: parsePathname(pathname),
        queryString: search,
      });
      resolve(parseResult);
      set({ data });
    },
    renderState: null,
    actions: {
      navigate: (to) => history.push(to),
      back: () => history.back(),
      forward: () => history.forward(),
    },
  };
});

export const { navigate, back, forward } = useRouterStore.getState().actions;
