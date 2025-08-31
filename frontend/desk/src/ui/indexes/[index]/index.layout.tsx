import { States } from "@enun/react";
import { IndexState } from "module/index";
import { useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import z from "zod";

export function IndexLayout() {
  const indexId = useIndexId();

  return (
    <States state={IndexState(indexId)}>
      <Outlet />
    </States>
  );
}

const useIndexId = () => {
  const { indexId } = useParams();
  const parsedId = useMemo(() => {
    return z.coerce.number().parse(indexId);
  }, [indexId]);

  return parsedId;
};
