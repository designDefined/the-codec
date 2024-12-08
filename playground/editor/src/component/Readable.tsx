import { Descendant } from "slate";
import { useSlate } from "slate-react";

type ReadableProps = {
  renderStatic?: (descendant: Descendant, index: number) => React.JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

export const Readable = ({ renderStatic, ...props }: ReadableProps) => {
  const editor = useSlate();
  return <div {...props}>{renderStatic && editor.children.map(renderStatic)}</div>;
};
