import { Button, Div, H1, Main } from "@flexive/core";
import { useEffect, useState } from "react";
import { IndexRepository } from "../core/repository/IndexRepository";
import { Index } from "../core/entity/Index";
import { Editor } from "../component/Editor/Editor";
import "./style.css";
import { produce } from "immer";

export function Home() {
  const [index, setIndex] = useState<Index | null>(null);

  useEffect(() => {
    IndexRepository.getIndex(2).then(({ data }) => setIndex(data));
  }, []);

  if (!index) return null;

  return (
    <Main f={{ spacing: [16, 32] }}>
      <Button onClick={() => IndexRepository.putIndex(2, index).then(console.log).catch(console.error)}>저장</Button>
      <Div>
        <H1>{index.title}</H1>
      </Div>
      <Div f={{ spacing: [0, 16] }}>
        {index.data.map(box => (
          <Editor
            key={box.id}
            initialValue={box.children}
            onChange={value => {
              setIndex(
                produce(index, draft => {
                  const target = draft.data.find(({ id }) => id === box.id);
                  if (!target) return draft;
                  target.children = value;
                  return draft;
                }),
              );
            }}
          />
        ))}
      </Div>
    </Main>
  );
}
