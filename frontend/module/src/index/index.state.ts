import { state } from "@enun/state";
import type { Index } from "shared/types/src/index.types";

import { createFromState } from "../_common";

interface IndexState extends Index {
  setName: (name: string) => void;

  refreshIndex: () => Promise<void>;
  isRefreshingIndex: boolean;
}

interface IndexStateDeps {
  from: () => Promise<Index>;
}

const IndexFromState = createFromState<Index>();

const IndexState = state<IndexState, [Index["id"], IndexStateDeps]>()({
  as: id => id,
  is: async ({ set, compose }, id, { from }) => {
    const { value: fromIndexState } = await compose(IndexFromState(from, id));

    const setName = (name: string) => {
      set(prev => {
        prev.name = name;
      });
    };

    return {
      ...fromIndexState.current,
      setName,
      refreshIndex: fromIndexState.refresh,
      isRefreshingIndex: fromIndexState.isRefreshing,
    };
  },
});

export { IndexState };
