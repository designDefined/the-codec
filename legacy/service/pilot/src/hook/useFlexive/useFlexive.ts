import { useMemo } from "react";
import { Tag } from "../../temp/core/tag";
import { FlexiveStyle } from "@flexive/core";

export const useFlexive = (tag: Tag) => {
  const f = useMemo(() => {
    if (!tag.f || typeof tag.f !== "string") return {};
    const parsed = JSON.parse(tag.f);
    return parsed as FlexiveStyle;
  }, [tag.f]);
  return f;
};
