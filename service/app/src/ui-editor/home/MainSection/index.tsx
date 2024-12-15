import { Article, Div, Section } from "@flexive/core";
import { PropsWithChildren } from "react";

export const MainSection = ({ children }: PropsWithChildren) => (
  <Section row py={120}>
    <Div grow={2} basis={80} />
    <Article f basis={720}>
      {children}
    </Article>
    <Div grow={2} basis={80} />
  </Section>
);
