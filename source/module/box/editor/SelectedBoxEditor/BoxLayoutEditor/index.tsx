import { BoxPath } from "@core/entity/box/BoxPath";
import { useBoxEditorAt } from "../../BoxEditorContext";
import { Div } from "@flexive/core";
import { Box } from "@core/entity/box/Box";

type BoxLayoutEditorProps = {
  box: Box;
  path: BoxPath;
};

export const BoxLayoutEditor = ({ path }: BoxLayoutEditorProps) => {
  const {} = useBoxEditorAt(path);

  return <Div></Div>;
  // <SidePanelSection title="Layout">
  //   <InputLabel text="flow & align">
  //     <InputLabel level={2} text="direction" row></InputLabel>
  //     <InputLabel level={2} text="main" row></InputLabel>
  //     <InputLabel level={2} text="cross" row></InputLabel>
  //   </InputLabel>

  //   <InputLabel text="padding & gap">
  //     <Div row g={16}>
  //       <InputRow text="x">
  //         <InputNumber value={selected.px ?? 0} onChange={px => set({ px })} f />
  //       </InputRow>
  //       <InputRow text="y">
  //         <InputNumber value={selected.py ?? 0} onChange={py => set({ py })} f />
  //       </InputRow>
  //       <InputRow text="gap">
  //         <InputNumber value={selected.g ?? 0} onChange={g => set({ g })} f />
  //       </InputRow>
  //     </Div>
  //   </InputLabel>
  // </SidePanelSection>
};
