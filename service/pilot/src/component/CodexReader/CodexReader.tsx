import styles from "./CodexReader.module.css";
import { Codex } from "../../temp/core/codex";
import { Article, bindCSS } from "@flexive/core";
import { IndexReader } from "../IndexReader/IndexReader";

const cx = bindCSS(styles);

type CodexReaderProps = {
  data: Codex;
};

export function CodexReader({ data: codex }: CodexReaderProps) {
  return (
    <Article className={cx("CodexReader")}>
      {codex.data.map(index => (
        <IndexReader key={index.id} data={index} />
      ))}
    </Article>
  );
}
