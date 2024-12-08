import "@style/global/index.css";

import { Index } from "@core/entity/index/Index";
import { Article, Main, Section } from "@flexive/core";
import { IndexReader } from "@module/index/IndexReader";

type ReadIndexPageProps = { data: Index };

export const ReadIndexPage = ({ data }: ReadIndexPageProps) => {
  return (
    <Main row>
      <Section f basis={0} />
      <Article grow basis={720}>
        <IndexReader index={data} />
      </Article>
      <Section f basis={0} />
    </Main>
  );
};
