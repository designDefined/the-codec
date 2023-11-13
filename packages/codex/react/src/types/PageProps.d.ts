export type PageStatus = "mounting" | "mounted" | "unmounting";

export type PageProps = {
  status: PageStatus;
  location: string;
  queryString?: string;
};

export type PagePropsWithParams<ParamKeys extends readonly string[]> =
  PageProps & {
    params: Record<ParamKeys[number], string>;
  };
