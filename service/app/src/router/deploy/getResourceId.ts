import { ID } from "core/constant/ID";

export const getIndexId = () => {
  const paths = window.location.pathname.split("/");
  const last = paths[paths.length - 1] === "" ? paths[paths.length - 2] : paths[paths.length - 1];
  return ID.INDEX.parse(last);
};
