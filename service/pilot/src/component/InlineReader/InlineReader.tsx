import { bindCSS } from "@flexive/core";
import { useTypoClass } from "../../hook/useTypo/useTypo";
import { Inline } from "../../temp/core/inline";
import { useStyle } from "../../hook/useStyle/useStyle";

const cx = bindCSS({});

type InlineReaderProps = {
  data: Inline;
};

export function InlineReader({ data: inline }: InlineReaderProps) {
  const typoClass = useTypoClass(inline.tag);
  const style = useStyle(inline.tag);

  if (typeof inline.tag.anchor === "string") {
    return (
      <a href={inline.tag.anchor} className={cx(typoClass)} style={style}>
        {inline.data}
      </a>
    );
  }

  return (
    <span className={cx(typoClass)} style={style}>
      {inline.data}
    </span>
  );
}
