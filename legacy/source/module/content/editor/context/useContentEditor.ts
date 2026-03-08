import { useContext } from "react";
import { ContentEditorContext } from "./ContentEditorContext";

export const useContentEditor = () => {
  const context = useContext(ContentEditorContext);
  return context.boxId && context.current ? context.current : undefined;
};
