import { H1, Main } from "@flexive/core";
import { Piece } from "design/component/surface";

import { Page } from "@/component/layout/Page/Page";

import { IndexList } from "./IndexList";

export const IndexesPage = () => {
  return (
    <Page f p={24}>
      <H1 row alignC py={16}>
        Indexes Page
      </H1>
      <Main f row g={16}>
        <Piece grow={2}>
          <IndexList />
        </Piece>
        <Piece grow={1} />
      </Main>
    </Page>
  );
};
