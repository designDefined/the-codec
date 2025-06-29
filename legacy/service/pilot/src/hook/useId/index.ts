import { useMemo } from "react";
import { useParams } from "react-router-dom";

export const useCodexId = () => {
  const params = useParams();
  const parsed = useMemo(() => {
    const number = Number(params.codexId);
    return isNaN(number) ? undefined : number;
  }, [params.codexId]);
  return parsed;
};

export const useIndexId = () => {
  const params = useParams();
  const parsed = useMemo(() => {
    const number = Number(params.indexId);
    return isNaN(number) ? undefined : number;
  }, [params.indexId]);
  return parsed;
};
