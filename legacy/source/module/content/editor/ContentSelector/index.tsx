import { useContext, useEffect } from "react";
import { ContentEditorContext } from "../context";
import { useSlateWithV } from "slate-react";

export const ContentSelector = () => {
  const { editor, v } = useSlateWithV();
  const { set } = useContext(ContentEditorContext);

  useEffect(() => {
    set({ editor, count: v });
  }, [v]);

  return null;
};
