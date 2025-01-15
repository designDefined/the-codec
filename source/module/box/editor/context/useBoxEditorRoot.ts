import { Box } from "@core/entity/box/Box";
import { BoxEditorContext } from "./BoxEditorContext";
import { useMemo, useState } from "react";
import { BoxPath } from "@core/entity/box/BoxPath";
import { utils } from "./utility";
import { OuterBox } from "@core/entity/box/OuterBox";

export const useBoxEditorRoot = (root: OuterBox, onChangeRoot: (setter: (root: Box) => void) => void) => {
  const [selected, setSelected] = useState<{ box: Box; path: BoxPath } | undefined>({
    box: root,
    path: [{ id: root.id, name: root.name }],
  });

  const context: BoxEditorContext = useMemo(() => {
    return {
      root,
      selected,
      add: () => {},
      remove: () => {},
      edit: (path, setter) => onChangeRoot(root => setter(utils.findWithPath(root, path))),
      move: () => {},
      select: path => setSelected({ box: utils.findWithPath(root, path), path }),
      clearSelected: () => setSelected(undefined),
    };
  }, [root, selected, onChangeRoot]);

  return context;
};
