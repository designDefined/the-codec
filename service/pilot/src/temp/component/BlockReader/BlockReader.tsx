import { bindCSS } from "@flexive/core";
import { useTypoClass } from "../../../hook/useTypo/useTypo";
import { Block } from "../../core/block";
import { InlineReader } from "../InlineReader/InlineReader";
import { useStyle } from "../../../hook/useStyle/useStyle";

const cx = bindCSS({});

type BlockReaderProps = {
  data: Block;
};

export function BlockReader({ data: block }: BlockReaderProps) {
  const typoClass = useTypoClass(block.tag);
  const style = useStyle(block.tag);
  const isEmpty = block.data.length === 0 || (block.data.length === 1 && block.data[0].data.length < 1);

  if (typeof block.tag.heading === "number") {
    switch (block.tag.heading) {
      case 1:
        return (
          <h1 className={cx(typoClass)} style={style}>
            {isEmpty ? <br /> : block.data.map((inline, i) => <InlineReader data={inline} key={i} />)}
          </h1>
        );
      case 2:
        return (
          <h2 className={cx(typoClass)} style={style}>
            {isEmpty ? <br /> : block.data.map((inline, i) => <InlineReader data={inline} key={i} />)}
          </h2>
        );
      case 3:
        return (
          <h3 className={cx(typoClass)} style={style}>
            {isEmpty ? <br /> : block.data.map((inline, i) => <InlineReader data={inline} key={i} />)}
          </h3>
        );
      case 4:
        return (
          <h4 className={cx(typoClass)} style={style}>
            {isEmpty ? <br /> : block.data.map((inline, i) => <InlineReader data={inline} key={i} />)}
          </h4>
        );

      case 5:
        return (
          <h5 className={cx(typoClass)} style={style}>
            {isEmpty ? <br /> : block.data.map((inline, i) => <InlineReader data={inline} key={i} />)}
          </h5>
        );
    }
    return (
      <h6 className={cx(typoClass)} style={style}>
        {isEmpty ? <br /> : block.data.map((inline, i) => <InlineReader data={inline} key={i} />)}
      </h6>
    );
  }

  return (
    <p className={cx(typoClass)} style={style}>
      {isEmpty ? <br /> : block.data.map((inline, i) => <InlineReader data={inline} key={i} />)}
    </p>
  );
}
