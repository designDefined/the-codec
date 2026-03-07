import { bindCSS, Main } from "@flexive/core";

import { FullPage } from "../component/FullPage";
import { GlobalNavigator } from "../component/GlobalNavigator";
import { PageContent } from "../component/PageContent";
import styles from "./main.module.scss";

const cx = bindCSS(styles);

export const MainPage = () => {
  return (
    <FullPage className={cx("MainPage")}>
      <GlobalNavigator />
      <PageContent.Container>
        <PageContent.Title>
          <PageContent.TitleSub>the </PageContent.TitleSub>
          <span>Design</span>
        </PageContent.Title>
        <Main py={128}>
          <PageContent.Paragraph>
            The Codec의 디자인 시스템은 누구나 글을 편하고, 정확하고, 몰입감있게 읽을 수 있도록 설계되었습니다.
          </PageContent.Paragraph>
        </Main>
      </PageContent.Container>
    </FullPage>
  );
};
