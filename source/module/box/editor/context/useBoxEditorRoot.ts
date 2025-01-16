import { Box } from "@core/entity/box/Box";
import { BoxEditorContext } from "./BoxEditorContext";
import { useMemo, useState } from "react";
import { BoxPath } from "@core/entity/box/BoxPath";
import { utils } from "./utility";
import { OuterBox } from "@core/entity/box/OuterBox";

const { find, addChild, cloneChild, removeChild, wrap, unwrap } = utils;

export const useBoxEditorRoot = (root: OuterBox, onChangeRoot: (setter: (root: Box) => void) => void) => {
  const [selected, setSelected] = useState<{ box: Box; path: BoxPath } | undefined>({
    box: root,
    path: [{ id: root.id, name: root.name }],
  });

  const context: BoxEditorContext = useMemo(() => {
    return {
      root,
      selected,
      add: path =>
        onChangeRoot(root => {
          const child = addChild(find(root, path));
          setSelected({ path: [...path, { id: child.id, name: child.name }], box: child });
        }),
      clone: (path, id) =>
        onChangeRoot(root => {
          const cloned = cloneChild(find(root, path), id);
          setSelected({ path: [...path, { id: cloned.id, name: cloned.name }], box: cloned });
        }),
      remove: (path, id) =>
        onChangeRoot(root => {
          removeChild(find(root, path), id);
          setSelected(undefined);
        }),
      edit: (path, setter) => onChangeRoot(root => setter(find(root, path))),
      move: () => {},
      wrap: path =>
        onChangeRoot(root => {
          const wrapper = wrap(find(root, path.slice(0, -1)), path[path.length - 1].id);
          setSelected({ path: [...path.slice(0, -1), { id: wrapper.id, name: wrapper.name }], box: wrapper });
        }),
      unwrap: path => onChangeRoot(root => unwrap(find(root, path.slice(0, -1)), path[path.length - 1].id)),
      select: path => setSelected({ box: find(root, path), path }),
      clearSelected: () => setSelected(undefined),
    };
  }, [root, selected, onChangeRoot]);

  return context;
};
