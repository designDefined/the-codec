import styles from "./CodexReader.module.css";
import { Codex } from "../../core/codex";
import { Article, bindCSS, Header } from "@flexive/core";
import { IndexReader } from "../IndexReader/IndexReader";

const cx = bindCSS(styles);

type CodexReaderProps = {
  data: Codex;
};

export function CodexReader({ data: codex }: CodexReaderProps) {
  return (
    <Article className={cx("CodexReader")}>
      <Header f={{ spacing: [{ left: 48, bottom: 64 }] }} className={cx("typo-body-sans")}>
        {codex.title}
      </Header>
      {codex.data.map(index => (
        <IndexReader key={index.id} data={index} />
      ))}
    </Article>
  );
}
