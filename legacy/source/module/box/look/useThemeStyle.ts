import { BoxLook } from "@core/entity/box/BoxLook";
import { CSSProperties, useMemo } from "react";

export const useThemeStyle = (theme?: BoxLook["theme"]) => {
  const style = useMemo(() => {
    if (theme === undefined) return undefined;
    return { "--hue": `${theme}` } as CSSProperties;
  }, [theme]);
  return style;
};
