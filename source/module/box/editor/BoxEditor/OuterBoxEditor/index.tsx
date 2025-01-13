import styles from "./index.module.css";
import { BoxPath } from "@core/entity/box/BoxPath";
import { OuterBox } from "@core/entity/box/OuterBox";
import { Article, bindCSS } from "@flexive/core";
import { PropsWithChildren } from "react";
import { useBoxEditorAt } from "../../context";

const cx = bindCSS(styles);

type OuterBoxEditorProps = PropsWithChildren & {
  box: OuterBox;
  path: BoxPath;
};
export const OuterBoxEditor = ({ box, path, children }: OuterBoxEditorProps) => {
  const { isSelected } = useBoxEditorAt(path);

  return (
    <Article
      className={cx("OuterBoxEditor", { isSelected }, ...(box.look?.classes?.map(c => c.value) ?? []))}
      id={box.id}
      {...box.layout}
    >
      {children}
    </Article>
  );
};
