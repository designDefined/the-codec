import { bindCSS, Ul } from "@flexive/core";
import { Button } from "design/component/action";
import { Plus } from "iconoir-react";

import { useRepoMutation, useRepoQuery } from "@/repository/_hook";
import { indexMutation, indexQuery } from "@/repository/index.repository";

import { DashboardHeader } from "../DashboardHeader";
import styles from "./index.module.scss";
import { IndexItem } from "./IndexItem";

const cx = bindCSS(styles);

export const IndexDashboard = () => {
  const {
    data: { indexes },
  } = useRepoQuery(indexQuery.indexes());
  const { mutate: createIndex } = useRepoMutation(indexMutation.create({ name: "새 인덱스" }));

  const handleCreateIndex = () => {
    createIndex();
  };

  return (
    <>
      <DashboardHeader title="Index">
        <Button onClick={handleCreateIndex} alignM rad={4}>
          <Plus width={16} height={16} strokeWidth={2} />
        </Button>
      </DashboardHeader>
      <Ul className={cx("IndexDashboard")}>
        {indexes.map(index => (
          <IndexItem key={index.id} index={index} />
        ))}
      </Ul>
    </>
  );
};
