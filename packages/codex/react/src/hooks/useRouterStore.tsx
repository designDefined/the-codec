import {
  Action,
  BrowserHistory,
  createBrowserHistory,
  parsePath,
  Location,
} from "history";
import { create } from "zustand";
import { RouteTree } from "../types/RouteTree";
import { SearchResult } from "../types/SearchResult";
import { searchPageIndex } from "../functions/search/searchPageIndex";
import { parsePathnameToArray } from "../functions/parse/parsePathnameToArray";
import { DefaultErrorIndex } from "../components/DefaultError/DefaultErrorIndex";

export type RouterStore = {
  data: RouteTree | null;
  history: BrowserHistory;
  provide: (data: RouteTree) => void;
  // renderState: RenderState | null;
  actions: {
    navigate: (to: string) => void;
    back: () => void;
    forward: () => void;
  };
};

export const useRouterStore = create<RouterStore>()((set, get) => {
  const history = createBrowserHistory();

  const update = (
    result: SearchResult,
    location: Location,
    action: Action = Action["Push"],
  ): void => {
    // const previousState = get().renderState;
    // if (!previousState) {
    //   let context: PageContext | DynamicPageContext | null = null;
    //   if (result.status === "dynamic") {
    //     context = {
    //       status: "mounted",
    //     };
    //   } else {
    //   }
    //   return;
    // }
    // const newState = updateRenderState(result, previousState, location);
    console.log(action);
    // set({ renderState: newState });
  };

  history.listen(({ location, action }) => {
    const routeTree = get().data;
    if (!routeTree) return;

    const { pathname } = parsePath(location.pathname);
    const pathArray = parsePathnameToArray(pathname);
    const searchResult = searchPageIndex(
      routeTree,
      pathArray,
      DefaultErrorIndex,
    );

    update(searchResult, location, action);
  });

  return {
    data: null,
    history,
    provide: (data) => {
      const { pathname } = parsePath(history.location.pathname);
      const pathArray = parsePathnameToArray(pathname);
      const searchResult = searchPageIndex(data, pathArray, DefaultErrorIndex);
      update(searchResult, history.location);
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
