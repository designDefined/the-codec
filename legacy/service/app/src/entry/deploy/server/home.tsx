import { renderToString } from "react-dom/server";
import { HomePage } from "../../../ui-blog/home/HomePage";

export const render = async () => {
  const head = renderToString(<title>The Codec by DesignDefined</title>);
  const html = renderToString(<HomePage />);
  return { head, html };
};
