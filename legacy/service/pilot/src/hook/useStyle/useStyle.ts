import { CSSProperties, useMemo } from "react";
import { Tag } from "../../temp/core/tag";

export const useStyle = (tag: Tag) => {
  const style = useMemo(() => {
    if (!tag.style || typeof tag.style !== "string") return undefined;
    const parsed = JSON.parse(tag.style);
    return parsed as CSSProperties;
  }, [tag.style]);
  return style;
};
