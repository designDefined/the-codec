import { Box } from "@core/entity/box/Box";
import { BoxPath } from "@core/entity/box/BoxPath";
import { createContext } from "react";

type Setter = (box: Box) => void;

export type BoxEditorContext = {
  root: Box;
  selected?: { box: Box; path: BoxPath };
  add: (path: BoxPath) => void;
  remove: (path: BoxPath) => void;
  edit: (path: BoxPath, setter: Setter) => void;
  move: (from: BoxPath, to: BoxPath) => void;
  select: (path: BoxPath) => void;
  clearSelected: () => void;
};

export const BoxEditorContext = createContext<BoxEditorContext | null>(null);
