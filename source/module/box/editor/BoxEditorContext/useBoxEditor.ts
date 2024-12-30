import { useContext } from "react";
import { BoxEditorContext } from "./BoxEditorContext";

export const useBoxEditor = () => {
  const context = useContext(BoxEditorContext);
  if (!context) throw new Error("EditBoxProvider must be used inside BoxEditorProvider");
  return context;
};
