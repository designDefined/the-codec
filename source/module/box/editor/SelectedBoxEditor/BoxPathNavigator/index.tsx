import styles from "./index.module.css";
import { EditorPanel } from "@component/area";
import { BoxPath } from "@core/entity/box/BoxPath";
import { bindCSS, Ul } from "@flexive/core";
import { PathItem } from "./PathItem";
import { useBoxEditor, useBoxEditorAt } from "../../context";
import { InputLabel, InputText } from "@component/input";
import { Box } from "@core/entity/box/Box";

const cx = bindCSS(styles);

type BoxPathNavigatorProps = { path: BoxPath; box: Box };

export const BoxPathNavigator = ({ path, box }: BoxPathNavigatorProps) => {
  const { select } = useBoxEditor();
  const { edit } = useBoxEditorAt(path, box);
  return (
    <EditorPanel className={cx("BoxPathNavigator")} g={8}>
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
      <InputLabel level={2} colored text="Name" row alignC g={8}>
        <InputText
          size={30}
          value={box.name}
          onChange={e =>
            edit(draft => {
              draft.name = e.target.value;
            })
          }
        />
      </InputLabel>
    </EditorPanel>
  );
};
