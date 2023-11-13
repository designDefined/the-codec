import { ReactNode } from "react";

export type RenderState =
  | { status: "a"; a: ReactNode; b: null }
  | { status: "b"; b: ReactNode; a: null }
  | {
      status: "toB" | "toA";
      a: ReactNode;
      b: ReactNode;
    };
