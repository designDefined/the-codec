import { bindCSS } from "@flexive/core";
import { useEffect } from "react";
import { Editable } from "slate-react";

import { BlockRenderer } from "../BlockRenderer/BlockRenderer";
import { LeafRenderer } from "../LeafRenderer/LeafRenderer";
import styles from "./ContentEditor.module.scss";

const cx = bindCSS(styles);

export const ContentEditor = () => {
  useEffect(() => {
    // const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    //   event.preventDefault();
    // };
    // window.addEventListener("beforeunload", handleBeforeUnload);
    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);

  return (
    <Editable
      className={cx("ContentEditor")}
      renderElement={BlockRenderer}
      renderLeaf={LeafRenderer}
      spellCheck={false}
    />
  );
};
