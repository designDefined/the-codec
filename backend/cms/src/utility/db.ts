const takeFirstOrNull = <T>(values: T[]): T | null => {
  if (values.length === 0) return null;
  return values[0];
};

const takeFirstOrThrow = <T>(values: T[]): T => {
  if (values.length === 0) throw new Error("No values found");
  return values[0];
};

export { takeFirstOrNull, takeFirstOrThrow };
