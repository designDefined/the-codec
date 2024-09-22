import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { bindCSS, Div, H1, Header, Main } from "@flexive/core";

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
        <Link to="1">
          <Div>qwef</Div>
        </Link>
      </Header>
    </Main>
  );
}
