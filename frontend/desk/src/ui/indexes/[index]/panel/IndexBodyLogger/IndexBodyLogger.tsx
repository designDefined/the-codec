import { Button } from "design/component/action";
import { useSlate } from "slate-react";

import { EditorPanel } from "@/component/panel/EditorPanel/EditorPanel";

export const IndexBodyLogger = () => {
  const slate = useSlate();

  return (
    <EditorPanel px={16} py={12}>
      <Button
        onClick={() => {
          console.log(JSON.stringify(slate.children, null, 2));
        }}
      >
        로그
      </Button>
    </EditorPanel>
  );
};
