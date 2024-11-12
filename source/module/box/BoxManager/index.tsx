import { Article, Button, Div, H3 } from "@flexive/core";
import { ID } from "@core/constant/ID";
import { Box } from "@core/entity/box/Box";
import { InnerBox } from "@core/entity/box/InnerBox";
import { OuterBox } from "@core/entity/box/OuterBox";
import { nanoid } from "nanoid";

type BoxManager = {
  box: OuterBox;
  onChangeBox?: (box: Box) => void;
};

export const BoxManager = ({ box, onChangeBox }: BoxManager) => {
  return (
    <Article f={{ spacing: [0, 8] }}>
      <OuterBoxItem box={box} />
      <Button
        onClick={() => {
          const newBox: InnerBox = {
            id: nanoid() as ID["BOX"],
            title: `new box ${box.children.length + 1}`,
            type: "INNER_BOX",
            children: [{ type: "PARAGRAPH", children: [{ text: "" }] }],
          };
          onChangeBox?.({ ...box, children: [...box.children, newBox] });
        }}
      >
        추가
      </Button>
    </Article>
  );
};

const OuterBoxItem = ({ box }: { box: Box }) => {
  return (
    <Div f={{ spacing: [4] }}>
      <H3>{box.title}</H3>
      <Div f={{ spacing: [[2, 8]] }}>
        {box.type === "OUTER_BOX" ? (
          box.children.map(child => <OuterBoxItem key={child.id} box={child} />)
        ) : (
          <Div f={{ spacing: [[2, 8]] }}>{box.children.length} 개의 문단</Div>
        )}
      </Div>
    </Div>
  );
};
