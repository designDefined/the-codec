import { useParams } from "react-router-dom";
import { ID } from "core/constant/ID";

export const useIndexId = () => {
  const { indexId } = useParams();
  return ID.INDEX.parse(indexId);
};
