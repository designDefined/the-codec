import { Leaf } from "@core/entity/content/leaf/Leaf";
import { Descendant } from "slate";

export const isLeaf = (content: Descendant): content is Leaf => "text" in content && !("children" in content);
