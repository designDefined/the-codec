import { Panel } from "design/component/surface";
import { useSlate } from "slate-react";

export const IndexBodyLogger = () => {
  const slate = useSlate();

  return (
    <Panel px={16} py={12} sizeM={240}>
      <button
        onClick={() => {
          console.log(JSON.stringify(slate.children, null, 2));
        }}
      >
        로그
      </button>
    </Panel>
  );
};
