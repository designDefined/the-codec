import { PageContext } from "./PageContext";

export type PageProps = Pick<
  PageContext,
  "status" | "statusClass" | "location" | "action"
>;

export type PagePropsWithParams<ParamKeys extends readonly string[]> =
  PageProps & {
    params: Record<ParamKeys[number], string>;
  };
