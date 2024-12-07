import { ID } from "@core/constant/ID";
import { OuterBox } from "@core/entity/box/OuterBox";
import { nanoid } from "nanoid";

export const generateBoxId = (): ID["BOX"] => ID.BOX.parse(nanoid());

export const createOuterBox = (): OuterBox => {
  const outerBoxId = generateBoxId();
  const innerBoxId = generateBoxId();
  return {
    id: outerBoxId,
    type: "OUTER_BOX",
    title: "root",
    children: [
      {
        id: innerBoxId,
        title: "내용",
        type: "INNER_BOX",
        children: [{ type: "PARAGRAPH", children: [{ text: "" }] }],
      },
    ],
  };
};
