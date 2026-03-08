import { useState } from "react";
import styles from "./index.module.css";
import { Article, bindCSS, H4, PropsOf } from "@flexive/core";

const cx = bindCSS(styles);

type EditorPanelProps = PropsOf<"article"> & { name?: string };

export const EditorPanel = ({ children, className, name, ...props }: EditorPanelProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <Article
      className={cx("EditorPanel", { focus }, className)}
      px={16}
      pt={12}
      pb={name ? 16 : 12}
      g={12}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      rad={12}
      {...props}
    >
      {name && <H4 className={cx("name")}>{name}</H4>}
      {children}
    </Article>
  );
};
