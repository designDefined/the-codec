import { createContext, useContext } from "react";

type EditorConfig = {
  isPanelOpen: boolean;
  setIsPanelOpen: (isPanelOpen: boolean) => void;
};

export const EditorConfigContext = createContext<EditorConfig | null>(null);

export const useEditorConfig = () => {
  const context = useContext(EditorConfigContext);
  if (!context) {
    throw new Error("EditorConfigContext not found");
  }

  return context;
};
