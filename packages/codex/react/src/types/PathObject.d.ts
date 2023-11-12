import { ReactNode } from "react";

export type PathObject = {
  component: ReactNode;
  params?: string[];
  transition?: never;
  pathAlias?: string;
};
