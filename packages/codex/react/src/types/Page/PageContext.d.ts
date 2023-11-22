import { Action } from "history";
import { DynamicPageIndex, PageIndex } from "./PageIndex";

type PageMountStatus = "mounting" | "mounted" | "unmounting" | "unmounted";

export type PageContext = {
  pageIndex: PageIndex;
  status: PageMountStatus;
  statusClass: string | null;
  location: string;
  action: Action;
};

export type DynamicPageContext<
  ParamKeys extends readonly string[] = readonly string[],
> = PageContext & {
  pageIndex: DynamicPageIndex<ParamKeys>;
  params: Record<ParamKeys[number], string>;
};
