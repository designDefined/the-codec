import { MainContent } from "@component/area";
import styles from "./index.module.css";
import { IndexView } from "@core/view/index";
import { bindCSS, Button, Div, Input, Li, Ol, P } from "@flexive/core";
import { Link } from "react-router-dom";
import { useIntentSubmit, useView } from "viajs-react";
import { IndexIntent } from "@core/intent/index";

const cx = bindCSS(styles);

export const ManageIndexSection = () => {
  const { value: summaries } = useView({ view: IndexView.summaries() });
  const { value: title, set, isValid, submit } = useIntentSubmit({ intent: IndexIntent.create() });

  return (
    <MainContent className={cx("ManageIndexSection")} mainProps={{ g: 24 }}>
      <Ol row wrap g={12} p={0}>
        {summaries.map(summary => {
          if (!summary) return null;
          return (
            <Li className={cx("item")} key={summary.id} rad={8}>
              <Link to={`/idx/${summary.id}`}>
                <P px={24} py={16}>
                  {summary.title}
                </P>
              </Link>
            </Li>
          );
        })}
      </Ol>
      <Div row g={12}>
        <Input
          className={cx("item")}
          type="text"
          px={8}
          py={4}
          rad={8}
          placeholder="인덱스 이름"
          value={title.value ?? ""}
          onChange={e => set(e.target.value)}
        />
        <Button className={cx("item")} px={8} py={4} rad={8} disabled={!isValid} onClick={submit}>
          생성
        </Button>
      </Div>
    </MainContent>
  );
};
