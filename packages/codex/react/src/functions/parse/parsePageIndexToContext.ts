import { Action } from "history";
import { PageContext } from "../../types/Page/PageContext";
import { PageIndex } from "../../types/Page/PageIndex";

const normal = (
  pageIndex: PageIndex,
  location: string,
  action: Action,
): PageContext => {
  const { transition } = pageIndex;
  let status = "mounted";
  if (transition && transition.type === "simultaneous") status = "mounting";
  if (transition && transition.type === "consecutive") status = "unmounted";

  return {
    pageIndex,
    status: "mounted",
    statusClass: null,
    location,
    action,
  };
};
const dynamic = () => {};

const parsePageIndexToContext = { normal, dynamic };

export default parsePageIndexToContext;
