import { Article } from "@flexive/core";
import { useBoxEditor } from "../context";
import { BoxLayoutEditor } from "./BoxLayoutEditor";
import { BoxPathNavigator } from "./BoxPathNavigator";
import { BoxLookEditor } from "./BoxLookEditor";

export const SelectedBoxEditor = () => {
  const { selected } = useBoxEditor();

  if (!selected) return null;

  return (
    <Article g={6}>
      <BoxPathNavigator {...selected} />
      <BoxLayoutEditor {...selected} />
      <BoxLookEditor {...selected} />
    </Article>
  );
};
