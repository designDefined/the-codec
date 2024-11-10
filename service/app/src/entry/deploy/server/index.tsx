import { renderToString } from "react-dom/server";
import { createDataHandler } from "data/api";
import { ReadIndexPage } from "../../../ui-blog/idx/ReadIndexPage";
import { Index } from "core/entity/index/Index";

const { read } = createDataHandler();

export const render = async (indexId: string) => {
  const data = await read<Index>(`/data/index/${indexId}/data.json`);
  const html = renderToString(<ReadIndexPage data={data} />);
  return { html };
};
