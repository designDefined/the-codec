import { Article, Header } from "@flexive/core";
import { MainTitle } from "@module/logo";
import { Suspense } from "react";
import { ManageIndexSection } from "../ManageIndexSection";

export const HomePage = () => (
  <Article>
    <Header alignC px={24} py={48}>
      <MainTitle />
    </Header>
    <Suspense>
      <ManageIndexSection />
    </Suspense>
  </Article>
);
