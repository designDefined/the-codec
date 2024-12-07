import { BoxPath } from "@core/entity/box/BoxPath";
import { Intent } from "viajs-core";

export const UpdateBoxContentIntent = Intent<[BoxPath]>(() => ({
  key: ["intent", "box", "updateBoxContent"],
}));
