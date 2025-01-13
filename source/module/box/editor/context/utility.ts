import { Box } from "@core/entity/box/Box";
import { BoxPath } from "@core/entity/box/BoxPath";

const findWithPath = (root: Box, path: BoxPath) => {
  const result = path.reduce(
    (acc, { id }, i) => {
      // root
      if (i === 0) return acc;

      // invalid case
      if (!acc) return acc;
      if (acc.type === "INNER_BOX") return acc;

      return acc?.children.find(child => child.id === id);
    },
    root as Box | undefined,
  );
  if (!result) throw new Error("Box not found: " + path.map(({ id }) => id).join(", "));
  return result;
};

export const utils = { findWithPath };
