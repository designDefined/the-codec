import { useCallback, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import type { Descendant } from "slate";
import z from "zod";

import { EditorProvider } from "@/component/provider/EditorProvider";
import { IndexIdProvider } from "@/component/provider/IndexIdProvider";
import { parseBody, stringifyBody } from "@/editor/body.utility";
import { useRepoMutation, useRepoQuery } from "@/repository/_hook";
import { indexMutation, indexQuery } from "@/repository/index.repository";

export const IndexLayout = () => {
  const indexId = useIndexIdParam();
  const {
    data: { body },
  } = useRepoQuery(indexQuery.body(indexId));
  const { mutateAsync: updateBody } = useRepoMutation(indexMutation.updateBody(indexId));

  const initialValue = useMemo(() => parseBody(body), [body]);
  const onSave = useCallback(
    (value: Descendant[]) => {
      void updateBody({ body: stringifyBody(value) }).then(() => {
        alert("저장되었습니다.");
      });
    },
    [updateBody],
  );

  return (
    <IndexIdProvider indexId={indexId}>
      <EditorProvider initialValue={initialValue} onSave={onSave}>
        <Outlet />
      </EditorProvider>
    </IndexIdProvider>
  );
};

const useIndexIdParam = () => {
  const { indexId } = useParams();
  const parsedId = useMemo(() => {
    return z.coerce.number().parse(indexId);
  }, [indexId]);

  return parsedId;
};
