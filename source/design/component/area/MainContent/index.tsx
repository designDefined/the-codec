import { Article, Div, Main, NativeElementOf, PropsOf } from "@flexive/core";
import { forwardRef } from "react";

type MainContentProps = PropsOf<"article"> & { mainProps?: Omit<PropsOf<"main">, "children"> };

export const MainContent = forwardRef<NativeElementOf<"article">, MainContentProps>(
  ({ mainProps, children, ...props }, ref) => (
    <Article row ref={ref} {...props}>
      <Div grow={2} basis={80} />
      <Main f basis={720} {...mainProps}>
        {children}
      </Main>
      <Div grow={2} basis={80} />
    </Article>
  ),
);
