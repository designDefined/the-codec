import { Article } from "@flexive/core";
import { useBoxEditor } from "../context";
import { BoxLayoutEditor } from "./BoxLayoutEditor";
import { BoxPathNavigator } from "./BoxPathNavigator";
import { BoxLookEditor } from "./BoxLookEditor";
import { useThemeStyle } from "@module/box/look";

export const SelectedBoxEditor = () => {
  const { selected } = useBoxEditor();
  const themeStyle = useThemeStyle(selected?.box.look.theme);

  if (!selected) return null;

  return (
    <Article g={6} style={themeStyle}>
      <BoxPathNavigator {...selected} />
      <BoxLayoutEditor {...selected} />
      <BoxLookEditor {...selected} />
    </Article>
  );
};
