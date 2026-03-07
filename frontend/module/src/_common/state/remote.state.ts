import { type RawKey, state } from "@enun/state";

interface FromState<Value> {
  current: Value;
  refresh: () => Promise<void>;
  isRefreshing: boolean;
  refreshError: unknown;
}

interface ToState<Payload = unknown> {
  save: (payload: Payload) => Promise<void>;
  isSaving: boolean;
  saveError: unknown;
}

const createFromState = <Value>() => {
  const FromState = state<FromState<Value>, [() => Promise<Value>, RawKey?]>()({
    as: (_, id) => id ?? true,
    is: async ({ set }, from) => {
      const current = await from();
      const refresh = () => {
        set({ isRefreshing: true });
        return from()
          .then(value => {
            set({
              current: value,
              isRefreshing: false,
            });
          })
          .catch((e: unknown) => {
            set({
              isRefreshing: false,
              refreshError: e,
            });
          });
      };

      return {
        current,
        isRefreshing: false,
        refresh,
        refreshError: null,
      };
    },
  });

  return FromState;
};

const createToState = <Payload>() => {
  const ToState = state<ToState<Payload>, [(payload: Payload) => Promise<void>, RawKey?]>()({
    as: (_, id) => id ?? true,
    is: ({ set }, to) => {
      const save = (payload: Payload) => {
        set({ isSaving: true });
        return to(payload)
          .then(() => {
            set({ isSaving: false });
          })
          .catch((e: unknown) => {
            set({
              isSaving: false,
              saveError: e,
            });
          });
      };

      return {
        save,
        isSaving: false,
        saveError: null,
      };
    },
  });

  return ToState;
};

export { createFromState, createToState };
export type { FromState, ToState };
