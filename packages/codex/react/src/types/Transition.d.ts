type Instant = {
  type: "instant";
  duration: number;
};

type Consecutive = {
  type: "consecutive";
  duration: number;
  durationBefore?: number;
};

type Simultaneous = {
  type: "simultaneous";
  duration: number;
};

export type Transition = Instant | Consecutive | Simultaneous;
