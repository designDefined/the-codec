import { Div, H3, P } from "@flexive/core";
import { useMemo } from "react";
import { Descendant } from "slate";

type StatusViewerProps = {
  value: Descendant[];
  markdown: string;
};

export function StatusViewer({ value, markdown }: StatusViewerProps) {
  const { raw } = useMemo(() => {
    const raw = JSON.stringify(value, null, 2);
    return { raw };
  }, [value]);

  return (
    <Div f={{ flex: [1, 1], flow: ["row"], spacing: [0, 12], overflow: ["hidden"] }}>
      <Div f={{ flex: [1, 1, 0], spacing: [16, 16], overflow: ["auto", "hidden"] }} className="bordered">
        <H3>Raw</H3>
        <P className="wrap" f={{ flex: [1, 1] }}>
          {raw}
        </P>
      </Div>
      <Div f={{ flex: [1, 1, 0], spacing: [16, 16], overflow: ["auto", "hidden"] }} className="bordered">
        <H3>Markdown</H3>
        <P className="wrap" f={{ flex: [1, 1] }}>
          {markdown}
        </P>
      </Div>
    </Div>
  );
}
