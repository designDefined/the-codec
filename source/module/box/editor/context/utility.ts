import { ID } from "@core/constant/ID";
import { Box } from "@core/entity/box/Box";
import { BoxPath } from "@core/entity/box/BoxPath";
import { InnerBox } from "@core/entity/box/InnerBox";
import { OuterBox } from "@core/entity/box/OuterBox";
import { nanoid } from "nanoid";

// debug
const errorFromPath = (message: string, path: BoxPath) => `${message}: ${path.map(({ id }) => id).join(", ")}`;
const errorFromBox = (message: string, box: Box) => `${message}: ${box.id}`;

// create & clone
const createOuterBox = (): OuterBox => {
  const id = ID.BOX.parse(nanoid());
  return {
    id,
    type: "OUTER_BOX",
    name: "상자",
    children: [],
    layout: {},
    look: {},
  };
};

const cloneOuterBox = (from: OuterBox): OuterBox => {
  const id = ID.BOX.parse(nanoid());
  return {
    id,
    type: "OUTER_BOX",
    name: from.name + " 복사",
    children: from.children.map(child => (child.type === "INNER_BOX" ? cloneInnerBox(child) : cloneOuterBox(child))),
    layout: from.layout,
    look: from.look,
  };
};

const createInnerBox = (): InnerBox => {
  const id = ID.BOX.parse(nanoid());
  return {
    id,
    type: "INNER_BOX",
    name: "내용",
    children: [{ type: "PARAGRAPH", children: [{ text: "" }], look: {} }],
    layout: {},
    look: {},
  };
};

const cloneInnerBox = (from: InnerBox): InnerBox => {
  const id = ID.BOX.parse(nanoid());
  return {
    id,
    type: "INNER_BOX",
    name: from.name + " 복사",
    children: from.children,
    layout: from.layout,
    look: from.look,
  };
};

// find
const find = (root: Box, path: BoxPath) =>
  path.reduce<Box>((acc, { id }, i) => {
    // root
    if (i === 0) return root;
    // invalid case
    if (!acc) throw new Error(errorFromPath("Box not found", path));
    if (acc.type === "INNER_BOX") throw new Error(errorFromPath("Box not found", path));
    // find child
    const result = acc.children.find(child => child.id === id);
    if (!result) throw new Error(errorFromPath("Box not found", path));
    return result;
  }, root);

// add
const addChild = (to: Box) => {
  if (to.type === "INNER_BOX") throw new Error(errorFromBox("Cannot add child to InnerBox", to));
  const child = createInnerBox();
  to.children.push(child);
  return child;
};
const cloneChild = (from: Box, id: ID["BOX"]) => {
  if (from.type === "INNER_BOX") throw new Error(errorFromBox("Cannot copy child from InnerBox", from));
  const index = from.children.findIndex(child => child.id === id);
  if (index === -1) throw new Error(errorFromBox("Cannot copy non-existing child", from));
  const cloned =
    from.children[index].type === "INNER_BOX"
      ? cloneInnerBox(from.children[index])
      : cloneOuterBox(from.children[index]);
  from.children.splice(index + 1, 0, cloned);
  return cloned;
};

// remove
const removeChild = (from: Box, id: ID["BOX"]) => {
  if (from.type === "INNER_BOX") throw new Error(errorFromBox("Cannot remove child from InnerBox", from));
  from.children = from.children.filter(child => child.id !== id);
};

// wrap
const wrap = (parent: Box, id: ID["BOX"]) => {
  if (parent.type === "INNER_BOX") throw new Error(errorFromBox("Cannot wrap Innerbox content", parent));
  const index = parent.children.findIndex(child => child.id === id);
  if (index === -1) throw new Error(errorFromBox("Cannot wrap non-existing child", parent));
  const wrapper = createOuterBox();
  wrapper.name = parent.children[index].name + " 상자";
  wrapper.children.push(parent.children[index]);
  parent.children.splice(index, 1, wrapper);
  return wrapper;
};

const unwrap = (parent: Box, id: ID["BOX"]) => {
  if (parent.type === "INNER_BOX") throw new Error(errorFromBox("Cannot unwrap Innerbox content", parent));
  const index = parent.children.findIndex(child => child.id === id);
  if (index === -1) throw new Error(errorFromBox("Cannot unwrap non-existing child", parent));
  const target = parent.children[index];
  if (target.type === "INNER_BOX") throw new Error(errorFromBox("Cannot unwrap inner box", target));
  parent.children.splice(index, 1, ...target.children);
};

export const utils = { cloneOuterBox, find, addChild, cloneChild, removeChild, wrap, unwrap };
