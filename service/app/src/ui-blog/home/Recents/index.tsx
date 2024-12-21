import styles from "./index.module.css";
import { bindCSS, Div, H2, Ol } from "@flexive/core";
import { typ } from "@style/names";
import { RecentItem } from "./RecentItem";
import { ID } from "@core/constant/ID";

const cx = bindCSS(styles);

export const Recents = () => {
  return (
    <Div className={cx("Recents")} g={32}>
      <H2 className={cx("title", typ.font.serif)}>새로운 글</H2>
      <Ol px={0} g={16}>
        {[
          {
            id: 2 as ID["INDEX"],
            title: "색의 언어, 색의 연산",
            description: "",
            createdAt: 0,
          },
          {
            id: 2 as ID["INDEX"],
            title: "강아지와 바퀴",
            subtitle: "초보 개발자가 '의미 있는' 나만의 라이브러리를 개발 하는 법",
            description:
              "바퀴를 다시 발명하지 마라, 프로그래밍의 오랜 격언입니다. 이미 존재하는 툴을 다시 개발하는 데 시간을 쓰지 말라는 의미죠. 한동안 이 글귀를 볼 때마다 뜨끔하는 기분이었습니다. 혹시 당신도 마찬가지인가요?",
            createdAt: 0,
          },
        ].map(summary => (
          <RecentItem summary={summary} />
        ))}
      </Ol>
    </Div>
  );
};