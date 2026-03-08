import { createContext, useContext } from "react";
import type { Index } from "types/index";

export const IndexIdContext = createContext<Index["id"] | undefined>(undefined);
export const useIndexId = () => {
  const indexId = useContext(IndexIdContext);
  if (!indexId) {
    throw new Error("IndexIdContext not found");
  }

  return indexId;
};
