import { Aside, bindCSS, Button } from "@flexive/core";

import { useEditorConfig } from "@/context/EditorConfigContext";

import { IndexBodyLogger } from "../panel/IndexBodyLogger";
import styles from "./index.module.scss";

const cx = bindCSS(styles);

export const IndexEditorSidebar = () => {
  const { isPanelOpen, setIsPanelOpen } = useEditorConfig();

  return (
    <Aside className={cx("IndexEditorSidebar", { closed: !isPanelOpen })} absolute>
      <Button
        className={cx("toggle")}
        onClick={() => {
          setIsPanelOpen(!isPanelOpen);
        }}
        absolute
      >
        Toggle
      </Button>
      <IndexBodyLogger />
    </Aside>
  );
};
