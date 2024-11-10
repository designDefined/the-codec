import "@service/design/style/global/index.css";

import { Index } from "core/entity/index/Index";
import { Article, Main, Section } from "@flexive/core";
import { IndexReader } from "@service/module/index/IndexReader";

type ReadIndexPageProps = { data: Index };

export const ReadIndexPage = ({ data }: ReadIndexPageProps) => {
  return (
    <Main f={{ flow: ["row"] }}>
      <Section f={{ flex: [1, 1, 0] }} />
      <Article f={{ flex: [1, 0, 720] }}>
        <IndexReader index={data} />
      </Article>
      <Section f={{ flex: [1, 1, 0] }} />
    </Main>
  );
};
