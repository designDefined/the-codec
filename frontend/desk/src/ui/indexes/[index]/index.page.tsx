import { Article } from "@flexive/core";

import { ContentEditor } from "@/component/editor/ContentEditor/ContentEditor";

import { IndexEditorSidebar } from "./IndexEditorSidebar";

export function IndexPage() {
  return (
    <Article f hide>
      <ContentEditor />
      <IndexEditorSidebar />
    </Article>
  );
}
