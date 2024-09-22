import { Tag } from "../../temp/core/tag";
import { useMemo } from "react";

export const useTypoClass = (tag: Tag) => {
  const className = useMemo(() => {
    const result: string[] = [];
    if (tag.typo) result.push(`typo-${tag.heading ? "heading" : "body"}-${tag.typo}`);
    if (tag.weight) result.push(`weight-${tag.weight}`);
    if (tag.indent) result.push(`typo-indent`);
    return result.join(" ");
  }, [tag]);
  return className;
};
