import { BoxPath } from "@core/entity/box/BoxPath";
import { BoxEditorContext } from "./BoxEditorContext";
import { useContext } from "react";
import { Box } from "@core/entity/box/Box";

export const useBoxEditorAt = (path: BoxPath, box: Box) => {
  const context = useContext(BoxEditorContext);
  if (!context) throw new Error("EditBoxProvider must be used inside BoxEditorProvider");
  if (path.length === 0) throw new Error("OuterBoxItem must have a path");

  return {
    isSelected: box.id === context.selected?.box.id,
    isChildSelected: !!context.selected?.path.some(p => p.id === box.id),
    isRoot: path.length === 1,
    select: () => context.select(path),
    edit: (setter: (box: Box) => void) => context.edit(path, setter),
    add: () => (box.type === "INNER_BOX" ? undefined : context.add(path)),
    clone: () => context.clone(path.slice(0, -1), box.id),
    remove: () => context.remove(path.slice(0, -1), box.id),
    wrap: () => context.wrap(path),
    unwrap: () => context.unwrap(path),
  };
};
