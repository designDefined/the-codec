import { Box } from "@core/entity/box/Box";
import { BoxEditorContext } from "./BoxEditorContext";
import { useMemo, useState } from "react";
import { BoxPath } from "@core/entity/box/BoxPath";
import { utils } from "./utility";
import { OuterBox } from "@core/entity/box/OuterBox";

const { find, addChild, cloneChild, removeChild, wrap, unwrap } = utils;

export const useBoxEditorRoot = (root: OuterBox, onChangeRoot: (setter: (root: Box) => void) => void) => {
  const [selectedPath, setSelectedPath] = useState<BoxPath | undefined>([{ id: root.id, name: root.name }]);
  const selectedBox = useMemo(() => (selectedPath ? find(root, selectedPath) : undefined), [selectedPath, root]);

  const context: BoxEditorContext = useMemo(() => {
    return {
      root,
      selected: selectedBox && selectedPath ? { box: selectedBox, path: selectedPath } : undefined,
      add: path =>
        onChangeRoot(root => {
          const child = addChild(find(root, path));
          setSelectedPath([...path, { id: child.id, name: child.name }]);
        }),
      clone: (path, id) =>
        onChangeRoot(root => {
          const cloned = cloneChild(find(root, path), id);
          setSelectedPath([...path, { id: cloned.id, name: cloned.name }]);
        }),
      remove: (path, id) =>
        onChangeRoot(root => {
          removeChild(find(root, path), id);
          setSelectedPath(undefined);
        }),
      edit: (path, setter) => onChangeRoot(root => setter(find(root, path))),
      move: () => {},
      wrap: path =>
        onChangeRoot(root => {
          const wrapper = wrap(find(root, path.slice(0, -1)), path[path.length - 1].id);
          setSelectedPath([...path.slice(0, -1), { id: wrapper.id, name: wrapper.name }]);
        }),
      unwrap: path => onChangeRoot(root => unwrap(find(root, path.slice(0, -1)), path[path.length - 1].id)),
      select: path => setSelectedPath(path),
      clearSelected: () => setSelectedPath(undefined),
    };
  }, [root, selectedPath, selectedBox, onChangeRoot]);

  return context;
};
