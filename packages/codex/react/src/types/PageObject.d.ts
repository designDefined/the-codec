import { FC } from "react";
import { PageProps, PagePropsWithParams } from "./PageProps";

type Base = {
  pathAlias?: string;
  transition?: unknown;
};

export type PageObjectWithoutParams = Base & {
  component: FC<PageProps>;
};

export type PageObjectWithParams<ParamKeys extends readonly string[]> = Base & {
  component: FC<PagePropsWithParams<ParamKeys>>;
  params: ParamKeys;
};

export type PageObject =
  | PageObjectWithoutParams
  | PageObjectWithParams<readonly string[]>;
