import { BoxLook } from "@core/entity/box/BoxLook";
import { color } from "@style/names";
import { CSSProperties, useMemo } from "react";

export const useBoxLookStyle = ({ theme, border, background, body, accent }: BoxLook): CSSProperties => {
  const style = useMemo(() => {
    const result = {} as Record<string, number | string>;
    if (theme) result["--hue"] = theme;
    if (background?.color) result[`--${color.background}`] = background.color;
    if (border?.weight) {
      result.borderStyle = "solid";
      if (border.weight === "THIN") result.borderWidth = 1;
      if (border.weight === "LIGHT") result.borderWidth = 2;
      if (border.weight === "MEDIUM") result.borderWidth = 3;
      if (border.weight === "BOLD") result.borderWidth = 4;
      if (border.weight === "HEAVY") result.borderWidth = 5;
    }
    if (border?.color) result[`--${color.border}`] = border.color;
    if (body?.color) result[`--${color.font.body}`] = body.color;
    if (accent?.color) result[`--${color.font.accent}`] = accent.color;
    return result as CSSProperties;
  }, [theme, border?.color, border?.weight, background?.color, body?.color, accent?.color]);

  return style;
};
