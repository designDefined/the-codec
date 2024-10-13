import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { bindCSS, Div, H1, H4, H5, H6, Header, Main } from "@flexive/core";

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
      <Header f={{ spacing: [[24, 48]] }}>
        <Div f={{ flow: ["row", "nowrap", "end", "space-between"], spacing: [0, 120] }}>
          <H1 f={{ flow: ["row"], spacing: [0, 20] }} className={cx("heading", "typo-heading-sans")}>
            <span className={cx("small")}>the</span> Codec
          </H1>
          <H5 className={cx("", "typo-heading-sans")}>Where the codes decode the world.</H5>
        </Div>
      </Header>
      <Main f={{ spacing: [48] }}>
        <H4 f={{ spacing: [[16, 12]] }} className={cx("typo-heading-sans")}>
          모든 글
        </H4>
        <Link to="1" className={cx("no-underline")}>
          <Div f={{ spacing: [24, 20], align: ["stretch", "auto", 800, 500] }} className={cx("card", "typo-body-sans")}>
            <H6 className={cx("typo-body-sans")}>1. 구성 재료 일람: 나</H6>
            <p className={cx("typo-body-sans")}>
              제가 어떻게 살아왔는 지에 대한 짧은 소개입니다. 앞으로 적을 글들에 대한 작은 맛보기이기도 하고요.
            </p>
          </Div>
        </Link>
      </Main>
    </Main>
  );
}
