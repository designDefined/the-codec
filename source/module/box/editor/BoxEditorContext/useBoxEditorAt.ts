import { BoxPath } from "@core/entity/box/BoxPath";
import { BoxEditorContext } from "./BoxEditorContext";
import { useContext } from "react";

export const useBoxEditorAt = (path: BoxPath) => {
  const context = useContext(BoxEditorContext);
  if (!context) throw new Error("EditBoxProvider must be used inside BoxEditorProvider");

  return {
    select: context.select(path),
    edit: context.edit(path),
  };
};
