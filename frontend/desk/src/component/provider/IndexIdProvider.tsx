import type { ReactNode } from "react";
import type { Index } from "types/index";

import { IndexIdContext } from "../../context/IndexContext";

export const IndexIdProvider = ({ children, indexId }: { children: ReactNode; indexId: Index["id"] }) => {
  return (
    <IndexIdContext key={indexId} value={indexId}>
      {children}
    </IndexIdContext>
  );
};
