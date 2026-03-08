import { bindCSS } from "@flexive/core";
import { Article, Div, Main } from "@flexive/core";

import { ContentEditor } from "@/component/editor/ContentEditor/ContentEditor";

import styles from "./index.page.module.scss";
import { IndexEditorSidebar } from "./IndexEditorSidebar/IndexEditorSidebar";

const cx = bindCSS(styles);

export function IndexPage() {
  return (
    <Article className={cx("IndexPage")} f row hide>
      <Div f={5} />
      <Main className={cx("main")} f={3} basis={720}>
        <ContentEditor />
      </Main>
      <Div f={5} />
      <IndexEditorSidebar />
    </Article>
  );
}
