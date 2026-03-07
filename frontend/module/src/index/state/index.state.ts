import { state } from "@enun/state";
import type { Index } from "shared/types/src/index.types";

interface IndexState extends Index {
  status: "IDLE" | "EDITING" | "UPDATING" | "UPDATED";
  setName: (name: string) => void;
  setDescription: (description: string) => void;
}

interface IndexStateDeps {
  index: Index;
  currentStatus: {
    idle: boolean;
    editing: boolean;
    updating: boolean;
    updated: boolean;
  };
}

const IndexState = state<IndexState, [IndexStateDeps]>()({
  as: ({ index, currentStatus }) => [
    index.id,
    Object.entries(currentStatus)
      .map(([key, value]) => (value ? key : ""))
      .join(""),
  ],
  is: ({ set }, { index, currentStatus }) => {
    const setName = (name: string) => {
      set({ name });
    };
    const setDescription = (description: string) => {
      set({ description });
    };

    return {
      ...index,
      status: "IDLE",
      setName,
      setDescription,
    };
  },
});

export { IndexState };
