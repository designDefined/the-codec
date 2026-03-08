import { ID } from "@core/constant/ID";
import { ContentEditor } from "@module/content/type";
import { useState } from "react";
import { ContentEditorContext } from "./ContentEditorContext";

export const useContentEditorRoot = (id?: ID["BOX"]): ContentEditorContext => {
  const [context, set] = useState<{ editor: ContentEditor; count: number } | undefined>(undefined);

  return { boxId: id, current: context, set };
};
