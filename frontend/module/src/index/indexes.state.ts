import { state } from "@enun/state";
import type { Index } from "shared/types/src/index.types";

import { createFromState } from "../_common";

interface IndexesState {
  indexes: Index[];
  refreshIndexes: () => Promise<void>;
  isRefreshingIndexes: boolean;
}

interface IndexesStateDeps {
  from: () => Promise<Index[]>;
}

const IndexFromState = createFromState<Index[]>();

const IndexesState = state<IndexesState, [IndexesStateDeps]>()({
  is: async ({ compose }, { from }) => {
    const { value: fromIndexesState } = await compose(IndexFromState(from));

    return {
      indexes: fromIndexesState.current,
      refreshIndexes: fromIndexesState.refresh,
      isRefreshingIndexes: fromIndexesState.isRefreshing,
    };
  },
});

export { IndexesState };
