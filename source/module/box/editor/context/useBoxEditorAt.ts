import { BoxPath } from "@core/entity/box/BoxPath";
import { BoxEditorContext } from "./BoxEditorContext";
import { useContext } from "react";
import { Box } from "@core/entity/box/Box";

export const useBoxEditorAt = (path: BoxPath) => {
  const context = useContext(BoxEditorContext);
  if (!context) throw new Error("EditBoxProvider must be used inside BoxEditorProvider");
  if (path.length === 0) throw new Error("OuterBoxItem must have a path");

  const last = path[path.length - 1];

  return {
    isSelected: last.id === context.selected?.box.id,
    isChildSelected: !!context.selected?.path.some(p => p.id === last.id),
    select: () => context.select(path),
    edit: (setter: (box: Box) => void) => context.edit(path, setter),
  };
};
