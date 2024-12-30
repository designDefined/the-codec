import { PropsWithChildren, useState } from "react";
import { Box } from "@core/entity/box/Box";
import { BoxEditorContext } from "./BoxEditorContext";
import { utils } from "./utility";
import { BoxPath } from "@core/entity/box/BoxPath";

type BoxEditorProviderProps = PropsWithChildren & {
  root: Box;
  onChangeRoot: (setter: (root: Box) => void) => void;
};

export const BoxEditorProvider = ({ root, onChangeRoot, children }: BoxEditorProviderProps) => {
  const [selected, setSelected] = useState<{ box: Box; path: BoxPath } | undefined>(undefined);

  return (
    <BoxEditorContext.Provider
      value={{
        root,
        selected,
        add: () => {},
        remove: () => {},
        edit: path => setter => onChangeRoot(root => setter(utils.findWithPath(root, path))),
        move: () => () => {},
        select: path => () => setSelected({ box: utils.findWithPath(root, path), path }),
        clearSelected: () => setSelected(undefined),
      }}
    >
      {children}
    </BoxEditorContext.Provider>
  );
};
