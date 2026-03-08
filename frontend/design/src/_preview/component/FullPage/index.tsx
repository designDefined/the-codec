import { Article, type PropsOf } from "@flexive/core";

type FullPageProps = PropsOf<"article">;

export const FullPage = ({ row, rowReverse, sizeC, sizeM, ...props }: FullPageProps) => {
  return (
    <Article
      row={row}
      rowReverse={rowReverse}
      sizeC={sizeC ?? (row || rowReverse ? "100vh" : "100vw")}
      sizeM={sizeM ?? (row || rowReverse ? "100vw" : "100vh")}
      {...props}
    />
  );
};
