import styles from "./index.module.css";
import { Box } from "@core/entity/box/Box";
import { useBoxEditorAt } from "../../context";
import { BoxPath } from "@core/entity/box/BoxPath";
import { EditorPanel } from "@component/area";
import { bindCSS, H5, Section } from "@flexive/core";
import { InputAmount, InputColor, InputHue, InputLabel } from "@component/input";
import { InputWeight } from "../../../../../design/component/input/style/InputWeight";

const cx = bindCSS(styles);

type BoxLookEditorProps = {
  box: Box;
  path: BoxPath;
};

export const BoxLookEditor = ({ path, box }: BoxLookEditorProps) => {
  const { edit } = useBoxEditorAt(path, box);

  return (
    <EditorPanel className={cx("BoxLookEditor")} name="Look">
      <Section row alignC g={12}>
        <H5 className={cx("sectionName")} basis={96} row alignC>
          Theme
        </H5>
        <InputHue
          value={box.look.theme}
          onChange={hue =>
            edit(box => {
              box.look.theme = hue;
            })
          }
        />
      </Section>
      <Section row alignC g={12}>
        <H5 className={cx("sectionName")} basis={96}>
          Border
        </H5>
        <InputColor
          value={box.look.border?.color}
          onChange={color => edit(draft => (draft.look.border = { ...draft.look.border, color }))}
        />
        <InputWeight
          value={box.look.border?.weight}
          onChange={weight => edit(draft => (draft.look.border = { ...draft.look.border, weight }))}
        />
      </Section>
      <Section row alignC g={12}>
        <H5 className={cx("sectionName")} basis={96}>
          Background
        </H5>
        <InputColor
          value={box.look.background?.color}
          onChange={color => edit(draft => (draft.look.background = { color }))}
        />
      </Section>
      <Section row alignC g={12}>
        <H5 className={cx("sectionName")} basis={96}>
          Radius
        </H5>
        <InputLabel level={2} colored>
          <InputAmount
            units={["px", "%"]}
            value={box.layout.rad}
            onBlurValue={rad => edit(draft => (draft.layout.rad = rad))}
            rad={8}
            size={4}
          />
        </InputLabel>
      </Section>
    </EditorPanel>
  );
};
