import { ID } from "@core/constant/ID";
import { ContentEditor } from "@module/content/type";
import { createContext } from "react";

export type ContentEditorContext = {
  boxId?: ID["BOX"];
  current?: { editor: ContentEditor; count: number };
  set: (state?: { editor: ContentEditor; count: number }) => void;
};

export const ContentEditorContext = createContext<ContentEditorContext>({ set: () => {} });
