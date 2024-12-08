import { Button, Div } from "@flexive/core";
import { PropsWithChildren } from "react";
import { useSlate } from "slate-react";
import { isElementActive, toggleCodeBlock } from "../config/format/element";
import { isMarkActive, toggleMark } from "../config/format/mark";

export const Toolbar = () => {
  const editor = useSlate();

  return (
    <Div f={{ flow: ["row"], spacing: [[8, 0], 12] }}>
      <ToolbarButton isActive={isMarkActive(editor, "bold")} onClick={() => toggleMark(editor, "bold")}>
        Bold
      </ToolbarButton>
      <ToolbarButton isActive={isElementActive(editor, "CODE_BLOCK")} onClick={() => toggleCodeBlock(editor)}>
        Code Block
      </ToolbarButton>
    </Div>
  );
};

type ToolbarButtonProps = PropsWithChildren<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}>;

const ToolbarButton = ({ onClick, isActive, children }: ToolbarButtonProps) => {
  return (
    <Button
      f={{ spacing: [[4, 8]] }}
      className={`toolbar-button ${isActive ? "" : "inactive"}`}
      onMouseDown={e => e.preventDefault()}
      onClick={e => {
        e.preventDefault();
        onClick?.(e);
      }}
    >
      {children}
    </Button>
  );
};
