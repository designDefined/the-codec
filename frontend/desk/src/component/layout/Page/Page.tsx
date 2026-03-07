import { Article, type PropsOf } from "@flexive/core";

type PageProps = PropsOf<"article">;
export const Page = ({ children, ...props }: PageProps) => {
  return <Article {...props}>{children}</Article>;
};
