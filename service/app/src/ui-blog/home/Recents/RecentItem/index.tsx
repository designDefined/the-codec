import styles from "./index.module.css";
import { IndexSummary } from "@core/entity/index/IndexSummary";
import { A, bindCSS, H3, H4, H5, I, Li, P } from "@flexive/core";
import { typ } from "@style/names";
import dayjs from "dayjs";

const cx = bindCSS(styles);

type RecentItemProps = {
  summary: IndexSummary;
};

export const RecentItem = ({ summary: { id, title, subtitle, description, createdAt } }: RecentItemProps) => {
  const date = dayjs(createdAt).format(`YYYY년 M월 D일`);

  return (
    <Li className={cx("RecentItem", typ.font.serif)} px={16} py={8}>
      <A href={`/idx/${id}`}>
        <H5 className={cx("date", typ.font.sans)}>
          <I>{date}</I>
        </H5>
        <H3 className={cx("title")} m={0} py={4}>
          {title}
        </H3>
        {subtitle && (
          <H4 className={cx("subtitle")} pt={16}>
            {subtitle}
          </H4>
        )}
        <P className={cx("description")} py={12}>
          {description}
        </P>
      </A>
    </Li>
  );
};
