import type { InteractionState } from "../style/state/state.types";

const extractActiveStateClasses = <State extends string>(value?: State | Partial<Record<State, boolean>>): string[] => {
  if (!value) return [];
  if (typeof value === "string") return [value];
  return Object.entries(value)
    .filter(([, isActive]) => Boolean(isActive))
    .map(([stateKey]) => stateKey);
};

const cs = (state?: InteractionState) => {
  if (!state) return undefined;
  const { user, data, validation, on, dirty } = state;

  const classes: string[] = [
    ...extractActiveStateClasses(user),
    ...extractActiveStateClasses(data),
    ...extractActiveStateClasses(validation),
    ...extractActiveStateClasses({
      on,
      dirty,
    }),
  ];

  return classes.join(" ");
};

export { cs };
