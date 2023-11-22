import { PageToRender } from "../types/PageToRender";
import { ReactNode } from "react";
import { pageToRenderHasNoParams } from "./predicate";
import { PageProps } from "../../types/Page/PageProps";

export const renderPage = (
  pageToRender: PageToRender,
  status: PageProps["status"],
  statusClass: PageProps["statusClass"] = status,
): ReactNode => {
  if (pageToRenderHasNoParams(pageToRender)) {
    return pageToRender.data.component({
      status,
      statusClass,
      location: pageToRender.location,
    });
  }
  return pageToRender.data.component({
    status,
    statusClass,
    location: pageToRender.location,
    params: pageToRender.parsedParams,
  });
};
