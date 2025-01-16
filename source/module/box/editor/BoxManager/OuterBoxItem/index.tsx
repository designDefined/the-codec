import styles from "./index.module.css";
import { BoxPath } from "@core/entity/box/BoxPath";
import { OuterBox } from "@core/entity/box/OuterBox";
import { bindCSS, Li, Span, Ul } from "@flexive/core";
import { InnerBoxItem } from "../InnerBoxItem";
import { Button, Selectable } from "@component/button";
import { useBoxEditorAt } from "../../context";
import { Chevron, Copy, Package, Plus, X } from "@component/icon";
import { useState } from "react";

const cx = bindCSS(styles);

type OuterBoxItemProps = {
  box: OuterBox;
  path: BoxPath;
  isRoot?: boolean;
};

export const OuterBoxItem = ({ box, path, isRoot }: OuterBoxItemProps) => {
  const [folded, setFolded] = useState(false);
  const { isSelected, isChildSelected, select, add, clone, remove } = useBoxEditorAt(path, box);

  return (
    <Li className={cx("OuterBoxItem", { isSelected, highlighted: isSelected || (isChildSelected && folded) })} g={4}>
      <Selectable
        className={cx("self")}
        as="div"
        bordered
        colored
        value={isSelected}
        onChange={value => {
          if (!value) return;
          setFolded(false);
          select();
        }}
        row
        alignC
        py={2}
        pl={6}
        pr={8}
        g={4}
        rad={4}
      >
        <Button
          className={cx("toggle")}
          onClick={e => {
            setFolded(v => !v);
            e.stopPropagation();
          }}
          shaded
          p={2}
          rad={4}
        >
          <Chevron size={12} clockwised={!folded} />
        </Button>
        <Span className={cx("name")} f row sizeC={24} alignC>
          {box.name}
        </Span>
        <Ul className={cx("buttons")} onClick={e => e.stopPropagation()} row alignC g={4}>
          <Button onClick={add} shaded rad={4} p={2}>
            <Plus size={20} />
          </Button>
          {!isRoot && (
            <>
              <Button shaded rad={4} p={2}>
                <Package size={20} />
              </Button>
              <Button onClick={clone} shaded rad={4} p={2}>
                <Copy size={20} />
              </Button>
              <Button onClick={remove} dim rad={4} p={2}>
                <X size={20} />
              </Button>
            </>
          )}
        </Ul>
      </Selectable>
      {!folded && (
        <Ul className={cx("children")} pl={20} g={4}>
          {box.children.map(child =>
            child.type === "OUTER_BOX" ? (
              <OuterBoxItem key={child.id} box={child} path={[...path, { id: child.id, name: child.name }]} />
            ) : (
              <InnerBoxItem key={child.id} box={child} path={[...path, { id: child.id, name: child.name }]} />
            ),
          )}
        </Ul>
      )}
    </Li>
  );
};
