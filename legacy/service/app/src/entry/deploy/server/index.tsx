import { renderToString } from "react-dom/server";
import { ReadIndexPage } from "../../../ui-blog/idx/ReadIndexPage";
import { Index } from "@core/entity/index/Index";
import { DataHandler } from "service/app/server/data";

const { read } = DataHandler;

export const render = async (indexId: string) => {
  const data = await read<Index>(`/idx/${indexId}/data.json`);
  const head = renderToString(<title>{data.title}</title>);
  const html = renderToString(<ReadIndexPage data={data} />);
  return { head, html };
};
