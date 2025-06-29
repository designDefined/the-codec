import { MainContent } from "@component/area";
import { Index } from "@core/entity/index/Index";
import { Article } from "@flexive/core";
import { IndexReader } from "@module/index/IndexReader";

type ReadIndexPageProps = { data: Index };

export const ReadIndexPage = ({ data }: ReadIndexPageProps) => {
  return (
    <MainContent>
      <Article grow basis={720}>
        <IndexReader index={data} />
      </Article>
    </MainContent>
  );
};
