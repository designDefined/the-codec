import { BrowserHistory, createBrowserHistory, parsePath } from "history";
import { create } from "zustand";
import { RouteTree } from "../types/RouteTree";
import { RenderState } from "../types/RenderState";
import { parseRoute } from "../functions/parseRoute";
import { parsePathname } from "../functions/parsePathname";
import { ParseFail, ParseSuccess } from "../types/RouteParserState";
import { ParsedRoute } from "../types/ParsedRoute";
import { renderRoute } from "../functions/renderRoute";

export type RouterStore = {
  data: RouteTree | null;
  history: BrowserHistory;
  provide: (data: RouteTree) => void;
  renderState: RenderState | null;
  setRenderState: (state: RenderState) => void;
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
  const resolve = (result: ParseSuccess | ParseFail) => {
    const previousState = get().renderState;

    if (result.status === "success") {
      // success
      const { target, params, queryString } = result;
      const parsedRoute: ParsedRoute = {
        component: target.component,
        pathObject: target,
        params,
        queryString,
      };
      set({ renderState: renderRoute(parsedRoute, previousState) });
    } else {
      // fail
      const { error } = result;
      const parsedRoute: ParsedRoute = {
        component: error.component,
        pathObject: error,
      };
      set({ renderState: renderRoute(parsedRoute, previousState) });
    }
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
    resolve(parseResult);
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
    setRenderState: (state) => set({ renderState: state }),
    actions: {
      navigate: (to) => history.push(to),
      back: () => history.back(),
      forward: () => history.forward(),
    },
  };
});

export const { navigate, back, forward } = useRouterStore.getState().actions;
