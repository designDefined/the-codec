import styles from "./index.module.css";
import { BoxPath } from "@core/entity/box/BoxPath";
import { InnerBox } from "@core/entity/box/InnerBox";
import { bindCSS, Li, Span, Ul } from "@flexive/core";
import { useBoxEditorAt } from "../../context";
import { Button, Selectable } from "@component/button";
import { Copy, Package, X } from "@component/icon";

const cx = bindCSS(styles);

type InnerBoxItemProps = {
  box: InnerBox;
  path: BoxPath;
};

export const InnerBoxItem = ({ box, path }: InnerBoxItemProps) => {
  const { select, isSelected, wrap, clone, remove } = useBoxEditorAt(path, box);
  return (
    <Li className={cx("InnerBoxItem", { isSelected })}>
      <Selectable
        as="div"
        colored
        value={isSelected}
        onChange={value => value && select()}
        row
        alignC
        px={8}
        py={2}
        rad={4}
      >
        <Span f row sizeC={24} alignC g={2}>
          <Span>{box.name}</Span>
          <Span className={cx("count")}>({box.children.length})</Span>
        </Span>
        <Ul className={cx("buttons")} onClick={e => e.stopPropagation()} row alignC g={4}>
          <Button onClick={wrap} shaded p={2} rad={4}>
            <Package size={20} />
          </Button>
          <Button onClick={clone} shaded p={2} rad={4}>
            <Copy size={20} />
          </Button>
          <Button onClick={remove} shaded p={2} rad={4}>
            <X size={20} />
          </Button>
        </Ul>
      </Selectable>
    </Li>
  );
};
