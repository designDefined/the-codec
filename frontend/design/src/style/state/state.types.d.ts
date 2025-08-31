type StateMap<State extends string> = Partial<Record<State, boolean>>;

type USER_STATE = "hover" | "focus" | "active" | "drag" | "disabled";
type DATA_STATE = "target" | "busy";
type VALIDATION_STATE = "valid" | "invalid" | "warning";

interface InteractionState {
  user?: USER_STATE | StateMap<USER_STATE>;
  data?: DATA_STATE | StateMap<DATA_STATE>;
  validation?: VALIDATION_STATE | StateMap<VALIDATION_STATE>;
  on?: boolean;
  dirty?: boolean;
}

export type { DATA_STATE, InteractionState, VALIDATION_STATE };
