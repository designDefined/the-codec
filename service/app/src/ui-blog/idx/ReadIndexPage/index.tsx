import { Index } from "core/entity/index/Index";
import { Main } from "@flexive/core";

type ReadIndexPageProps = { data: Index };

export const ReadIndexPage = ({ data }: ReadIndexPageProps) => {
  return <Main>{data.title}</Main>;
};
