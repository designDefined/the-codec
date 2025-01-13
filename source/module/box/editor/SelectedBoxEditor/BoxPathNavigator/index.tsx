import styles from "./index.module.css";
import { EditorPanel } from "@component/area";
import { BoxPath } from "@core/entity/box/BoxPath";
import { bindCSS, Ul } from "@flexive/core";
import { PathItem } from "./PathItem";
import { useBoxEditor } from "../../context";

const cx = bindCSS(styles);

type BoxPathNavigatorProps = { path: BoxPath };

export const BoxPathNavigator = ({ path }: BoxPathNavigatorProps) => {
  const { select } = useBoxEditor();
  return (
    <EditorPanel className={cx("BoxPathNavigator")}>
      <Ul role="list" row g={4}>
        {path.map((slice, i) => {
          const current = i === path.length - 1;
          return (
            <PathItem
              key={slice.id}
              pathSlice={slice}
              current={current}
              onClick={
                current
                  ? undefined
                  : () => {
                      select(path.slice(0, i + 1));
                    }
              }
            />
          );
        })}
      </Ul>
    </EditorPanel>
  );
};
