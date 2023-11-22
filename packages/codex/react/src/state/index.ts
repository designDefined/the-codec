import { createMachine } from "xstate";

export const routerState = createMachine({
  id: "router",
  initial: "idle",
  states: {
    renderA: {},
    renderB: {},
  },
});
