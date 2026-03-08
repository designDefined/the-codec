import { bindCSS, Div, H3, type PropsOf } from "@flexive/core";
import { Panel } from "design/component/surface";

import styles from "./EditorPanel.module.scss";

const cx = bindCSS(styles);

type EditorPanelProps = PropsOf<"article">;

export const EditorPanel = ({ children, className, ...props }: EditorPanelProps) => {
  return (
    <Panel className={cx("EditorPanel", className)} {...props}>
      {children}
    </Panel>
  );
};

type TitleProps = PropsOf<"h3">;
const Title = ({ children, className, ...props }: TitleProps) => {
  return (
    <H3 className={cx("EditorPanelTitle", className)} px={24} py={8} {...props}>
      {children}
    </H3>
  );
};

type ContentProps = PropsOf<"div">;
const Content = ({ children, className, ...props }: ContentProps) => {
  return (
    <Div className={cx("EditorPanelContent", className)} px={16} pb={8} g={8} {...props}>
      {children}
    </Div>
  );
};

EditorPanel.Title = Title;
EditorPanel.Content = Content;
