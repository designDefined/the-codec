import { Repository } from "core/repository";
import { ReadIndexPage } from "../../../ui-blog/idx/ReadIndexPage";
import { hydrateRoot } from "react-dom/client";
import { getIndexId } from "../../../router/deploy/getResourceId";

Repository.read.index
  .data(getIndexId())
  .then(data => hydrateRoot(document.getElementById("root") as HTMLElement, <ReadIndexPage data={data} />));
