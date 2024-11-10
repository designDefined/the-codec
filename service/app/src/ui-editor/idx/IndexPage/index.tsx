import { bindCSS, Main } from "@flexive/core";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useIndexId } from "../../../router/local/useResourceId";
import { Repository } from "core/repository";
import { Index } from "core/entity/index/Index";
import { BoxEditor } from "@service/module/content/box/BoxEditor";

const cx = bindCSS(styles);

export const IndexPage = () => {
  const id = useIndexId();
  const [get, set] = useState<Index | null>(null);

  useEffect(() => {
    Repository.read.index.data(id).then(a => {
      console.log(a);
      set(a);
    });
  }, []);

  return <Main className={cx("IndexPage")}>{get && <BoxEditor box={get.content} />}</Main>;
};
