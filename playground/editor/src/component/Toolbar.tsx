import { Button, Div } from "@flexive/core";
import { PropsWithChildren } from "react";
import { useSlate } from "slate-react";

export const Toolbar = () => {
  const editor = useSlate();

  return (
    <Div f={{ flow: ["row"], spacing: [[8, 0], 12] }}>
      <ToolbarButton>Bold</ToolbarButton>
      <ToolbarButton>Code Block</ToolbarButton>
    </Div>
  );
};

type ToolbarButtonProps = PropsWithChildren<{ onClick?: () => void; isActive?: boolean }>;

const ToolbarButton = ({ onClick, isActive, children }: ToolbarButtonProps) => {
  return (
    <Button f={{ spacing: [[4, 8]] }} className={`toolbar-button ${isActive ? "" : "inactive"}`} onClick={onClick}>
      {children}
    </Button>
  );
};
