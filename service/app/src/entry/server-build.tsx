// import { StrictMode } from "react";
// import { renderToString } from "react-dom/server";
// import { IndexReader } from "../component/IndexReader";
// import { getDynamic } from "../../data/static";
// import { Index } from "../core/entity/Index";

// export const render = async () => {
//   const data = (await getDynamic("/index/2/data.json")) as Index;

//   const html = renderToString(
//     <StrictMode>
//       <IndexReader data={data} />
//     </StrictMode>,
//   );
//   return { html };
// };
