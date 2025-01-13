import { useContext } from "react";
import { BoxEditorContext } from "./BoxEditorContext";

export const useBoxEditor = () => {
  const context = useContext(BoxEditorContext);
  if (!context) throw new Error("useBoxEditor must be used inside the BoxEditorProvider");
  return context;
};
