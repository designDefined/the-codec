import { Div, P } from "@flexive/core";

type StatusViewerProps = {
  ast: string;
};

export function StatusViewer({ ast }: StatusViewerProps) {
  return (
    <Div f={{ spacing: [0, 12] }}>
      <P style={{ whiteSpace: "pre-wrap" }}>{ast}</P>
    </Div>
  );
}
