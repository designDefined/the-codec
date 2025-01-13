import { BoxPath } from "@core/entity/box/BoxPath";
import { BoxEditorContext } from "./BoxEditorContext";
import { useContext } from "react";
import { Box } from "@core/entity/box/Box";

export const useBoxEditorAt = (path: BoxPath) => {
  const context = useContext(BoxEditorContext);
  if (!context) throw new Error("EditBoxProvider must be used inside BoxEditorProvider");

  return {
    isSelected: path.length > 0 && path[path.length - 1].id === context.selected?.box.id,
    select: () => context.select(path),
    edit: (setter: (box: Box) => void) => context.edit(path, setter),
  };
};
