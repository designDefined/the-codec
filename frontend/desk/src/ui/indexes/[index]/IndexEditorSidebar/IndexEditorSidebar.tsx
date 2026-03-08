import { Aside, bindCSS, Button, Div } from "@flexive/core";
import { NavArrowRight } from "iconoir-react";

import { BlockPanel } from "@/component/panel/content/BlockPanel/BlockPanel";
import { ParagraphTextPanel } from "@/component/panel/content/ParagraphTextPanel/ParagraphTextPanel";
import { useEditorConfig } from "@/context/EditorConfigContext";

import { IndexBodyLogger } from "../panel/IndexBodyLogger/IndexBodyLogger";
import styles from "./IndexEditorSidebar.module.scss";

const cx = bindCSS(styles);

export const IndexEditorSidebar = () => {
  const { isPanelOpen, setIsPanelOpen } = useEditorConfig();

  return (
    <Aside
      className={cx("IndexEditorSidebar", { closed: !isPanelOpen })}
      onMouseDown={e => {
        e.preventDefault();
      }}
      onClick={e => {
        e.stopPropagation();
      }}
      absolute
      top
      bottom
      right
      sizeC={380}
    >
      <Button
        className={cx("toggle")}
        onClick={() => {
          setIsPanelOpen(!isPanelOpen);
        }}
        absolute
        left={-32}
        sizeM={32}
        sizeC={32}
        alignC
      >
        <NavArrowRight width={24} height={24} color="oklch(60% 0 0)" />
      </Button>
      <Div f pl={12} pr={4} py={24} g={12} overM="scroll">
        <IndexBodyLogger />
        <BlockPanel />
        <ParagraphTextPanel />
      </Div>
    </Aside>
  );
};
