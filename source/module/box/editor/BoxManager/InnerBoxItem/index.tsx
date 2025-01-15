import styles from "./index.module.css";
import { BoxPath } from "@core/entity/box/BoxPath";
import { InnerBox } from "@core/entity/box/InnerBox";
import { bindCSS, Li, Span } from "@flexive/core";
import { useBoxEditorAt } from "../../context";
import { Button, Selectable } from "@component/button";
import { X } from "@component/icon";

const cx = bindCSS(styles);

type InnerBoxItemProps = {
  box: InnerBox;
  path: BoxPath;
};

export const InnerBoxItem = ({ box, path }: InnerBoxItemProps) => {
  const { select, isSelected } = useBoxEditorAt(path);
  return (
    <Li className={cx("InnerBoxItem")}>
      <Selectable
        className={cx("name", { isSelected })}
        as="div"
        colored
        value={isSelected}
        onChange={value => value && select()}
        row
        alignC
        px={8}
        py={2}
        g={4}
        rad={4}
      >
        <Span f row g={2}>
          <Span>{box.name}</Span>
          <Span className={cx("count")}>({box.children.length})</Span>
        </Span>
        <Button shaded rad={4} p={2}>
          <X size={20} />
        </Button>
      </Selectable>
    </Li>
  );
};
