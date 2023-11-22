import { FC } from "react";
import { Transition } from "../Transition";

type Common = {
  alias?: string;
  transition?: Transition;
};

export type PageIndex = Common & {
  component: FC;
};

export type DynamicPageIndex<ParamKeys extends readonly string[] = []> =
  Common & {
    component: FC<{ params: Record<ParamKeys[number], string> }>;
    paramKeys: ParamKeys;
  };
