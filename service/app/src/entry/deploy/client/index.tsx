import { ReadIndexPage } from "../../../ui-blog/idx/ReadIndexPage";
import { hydrateRoot } from "react-dom/client";
import { getIndexId } from "../../../router/deploy/getResourceId";
import { StaticRepository } from "@core/repository/static";

StaticRepository.index.data(getIndexId()).then(data => {
  if (!data) return;
  hydrateRoot(document.getElementById("root") as HTMLElement, <ReadIndexPage data={data} />);
});
