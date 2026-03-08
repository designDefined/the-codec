import { useStateOf } from "@enun/react";
import { Div, Input, type PropsOf } from "@flexive/core";
import { useState } from "react";
import type { Index } from "shared/types/src/index.types";

import { IndexState } from "../index.state";

interface IndexSummaryProps extends PropsOf<"div"> {
  index: Index;
}

const IndexSummary = () => {
  const {
    value: { name, setName },
  } = useStateOf(IndexState);

  const [editing, setEditing] = useState(false);

  return (
    <Div
      row
      onClick={() => {
        if (!editing) setEditing(true);
      }}
    >
      {editing ? (
        <Input
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      ) : (
        <Div>{name}</Div>
      )}
    </Div>
  );
};

export { IndexSummary };
