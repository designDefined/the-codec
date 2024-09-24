import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { bindCSS, Div, H1, H4, Header, Main } from "@flexive/core";

const cx = bindCSS(styles);

export function HomePage() {
  return (
    <Main
      f={{
        align: ["stretch", "hidden", "100vw", "100vw"],
        justify: ["start", "auto", "100vh", "100vh"],
      }}
      className={cx("HomePage")}
    >
      <Header f={{ align: ["center"] }}>
        <Div f={{ flow: ["row", "nowrap", "end"] }}>
          <H1 f={{ flow: ["row"], spacing: [0, 20] }} className={cx("heading", "typo-heading-sans")}>
            <span className={cx("small")}>the</span> Codec
          </H1>
        </Div>
      </Header>
      <Main f={{ spacing: [[24, 48]] }}>
        <Link to="1" className={cx("no-underline")}>
          <Div f={{ spacing: [[12, 24, 48, 24]] }} className={cx("card", "typo-body-sans")}>
            <H4 className={cx("typo-body-sans")}>1. 구성 재료 일람: 나</H4>
            <p className={cx("typo-body-sans")}>
              제가 어떻게 살아왔는 지에 대한 짧은 소개입니다. 앞으로 적을 글들에 대한 작은 맛보기이기도 하고요.
            </p>
          </Div>
        </Link>
      </Main>
    </Main>
  );
}
