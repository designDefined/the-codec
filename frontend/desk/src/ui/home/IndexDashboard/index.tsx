import { useStateOf } from "@enun/react";
import { bindCSS, Header, Li, Ul } from "@flexive/core";
import { IndexesState } from "module/index";
import { Link } from "react-router-dom";
import type { Index } from "types/index";

import { cmsApi } from "@/api";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

export const IndexDashboard = () => {
  const {
    value: { indexes },
  } = useStateOf(
    IndexesState({
      from: () =>
        cmsApi
          .get<{ indexes: Index[] }>("indexes")
          .json()
          .then(res => res.indexes),
    }),
  );

  // const handleClickToIndexesButton = () => {
  //   void cmsApi
  //     .post<{ index: Index }>("indexes", { json: { name: "test" } })
  //     .then(async res => {
  //       const { index } = await res.json();
  //       navigate(`/indexes/${index.id.toString()}`);
  //     });
  // };

  return (
    <>
      <Header className={cx("IndexDashboardHeader")} row alignC px={24} py={12}>
        Indexes
      </Header>
      <Ul>
        {indexes.map(index => (
          <IndexItem key={index.id} index={index} />
        ))}
      </Ul>
    </>
  );
};

interface IndexItemProps {
  index: Index;
}

const IndexItem = ({ index }: IndexItemProps) => {
  return (
    <Link to={`/indexes/${index.id.toString()}`}>
      <Li className={cx("IndexItem")} row px={16} py={8}>
        {index.name}
      </Li>
    </Link>
  );
};
