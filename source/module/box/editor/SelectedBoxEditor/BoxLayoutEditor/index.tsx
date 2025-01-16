import styles from "./index.module.css";
import { BoxPath } from "@core/entity/box/BoxPath";
import { useBoxEditorAt } from "../../context";
import { bindCSS, H5, Section } from "@flexive/core";
import { Box } from "@core/entity/box/Box";
import { InputLabel, InputAmount } from "@component/input";
import { EditorPanel } from "@component/area";

const cx = bindCSS(styles);

type BoxLayoutEditorProps = {
  box: Box;
  path: BoxPath;
};

export const BoxLayoutEditor = ({ box, path }: BoxLayoutEditorProps) => {
  const { edit } = useBoxEditorAt(path, box);

  return (
    <EditorPanel className={cx("BoxLayoutEditor")} name="Layouts">
      <Section row alignC g={8}>
        <H5 className={cx("sectionName")} basis={60}>
          Flow
        </H5>
      </Section>

      <Section row alignC g={16}>
        <H5 className={cx("sectionName")} basis={42}>
          Main
        </H5>
        <InputLabel level={2} colored text="size" row g={3} alignC>
          <InputAmount
            units={["px", "%", "vw"]}
            value={box.layout?.sizeM}
            onBlurValue={value => edit(prev => (prev.layout.sizeM = value))}
            size={4}
            rad={8}
          />
        </InputLabel>
        <InputLabel level={2} colored text="gap" row g={3} alignC>
          <InputAmount
            units={["px", "%", "vw"]}
            value={box.layout?.g}
            onBlurValue={value => edit(prev => (prev.layout.g = value))}
            size={3}
            rad={8}
          />
        </InputLabel>
        {/* <Select value="asdf" basis={160}>
          <Div g={4}>
            <Selectable>A</Selectable>
            <Selectable>B</Selectable>
          </Div>
        </Select> */}
      </Section>
      <Section row alignC g={16}>
        <H5 className={cx("sectionName")} basis={42}>
          Cross
        </H5>
        <InputLabel level={2} colored text="size" row g={3} alignC>
          <InputAmount
            units={["px", "%", "vw"]}
            value={box.layout?.sizeC}
            onBlurValue={value => edit(prev => (prev.layout.sizeC = value))}
            size={4}
            rad={8}
          />
        </InputLabel>
        <InputLabel level={2} colored text="gap" row g={3} alignC>
          <InputAmount
            units={["px", "%", "vw"]}
            value={box.layout?.g}
            onBlurValue={value => edit(prev => (prev.layout.g = value))}
            size={3}
            rad={8}
          />
        </InputLabel>
      </Section>

      <Section row alignC g={16}>
        <H5 className={cx("sectionName")} basis={64}>
          Padding
        </H5>
        <InputLabel level={2} colored text="X" row g={4} alignC>
          <InputAmount
            units={["px", "%", "vw"]}
            value={box.layout?.px}
            onBlurValue={value => edit(prev => (prev.layout.px = value))}
            size={3}
            rad={8}
          />
        </InputLabel>
        <InputLabel level={2} colored text="Y" row g={4} alignC>
          <InputAmount
            units={["px", "%", "vh"]}
            value={box.layout?.py}
            onBlurValue={value => edit(prev => (prev.layout.py = value))}
            size={3}
            rad={8}
          />
        </InputLabel>
      </Section>

      <Section row alignC g={16}>
        <H5 className={cx("sectionName")} basis={64}>
          Margin
        </H5>
        <InputLabel level={2} colored text="X" row g={4} alignC>
          <InputAmount
            units={["px", "%", "vw"]}
            value={box.layout?.mx}
            onBlurValue={value => edit(prev => (prev.layout.mx = value))}
            size={3}
            rad={8}
          />
        </InputLabel>
        <InputLabel level={2} colored text="Y" row g={4} alignC>
          <InputAmount
            units={["px", "%", "vh"]}
            value={box.layout?.my}
            onBlurValue={value => edit(prev => (prev.layout.my = value))}
            size={3}
            rad={8}
          />
        </InputLabel>
      </Section>
    </EditorPanel>
  );
};
