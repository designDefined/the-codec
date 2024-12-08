import { Article, bindCSS, Button, Div, Main, Section } from "@flexive/core";
import styles from "./index.module.css";
import { useIndexId } from "../../../router/local/useResourceId";
import { useIntentSubmit, useView } from "viajs-react";
import { BoxEditor } from "@module/box/BoxEditor";
import { BoxManager } from "@module/box/BoxManager";
import { Modal } from "@compoent/area/modal/Modal";
import { IndexInformationEditor } from "@module/index/IndexInformationEditor";
import { useState } from "react";
import { IndexIntent } from "@core/intent/index/index";
import { IndexView } from "@core/view/index";

const cx = bindCSS(styles);

export const IndexPage = () => {
  const id = useIndexId();
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const { value: index } = useView({ view: IndexView.data(id) });
  const {
    set,
    submit,
    value: { index: indexInput },
    isModified,
  } = useIntentSubmit({ intent: IndexIntent.update(id) });

  return (
    <Main className={cx("IndexPage")} sizeC="100vw" sizeM="100vh" hide>
      <Section f row over>
        <Section grow={2} shrink={0} basis={80} />
        <Article grow={1} shrink={0} basis={720} py={120} alignSelfC="start">
          <BoxEditor
            box={indexInput.value?.content ?? index.content}
            onChangeBox={box =>
              set(draft => {
                if (!draft.index) draft.index = index;
                if (draft.index.content.id === box.id && box.type === "OUTER_BOX") draft.index.content = box;
                else {
                  const targetIndex = draft.index.content.children.findIndex(target => target.id === box.id);
                  if (targetIndex >= 0) draft.index.content.children[targetIndex] = box;
                }
              })
            }
          />
        </Article>
        <Section f grow={2} shrink={0} basis={80} />
      </Section>

      <Section absolute top={0} right={0} sizeM={"100vh"} p={24} hide>
        <Div className={cx("panel", { closed: !isPanelOpen })} row f g={12}>
          <Button alignSelfC="center" onClick={() => setIsPanelOpen(prev => !prev)}>
            {">"}
          </Button>
          <Modal f sizeC={320} px={12} py={24} g={30} overM>
            <Button onClick={() => submit()} disabled={!isModified}>
              저장
            </Button>
            <IndexInformationEditor
              index={indexInput.value ?? index}
              onChangeIndexPartial={partial => {
                set(draft => {
                  if (!draft.index) draft.index = index;
                  Object.assign(draft.index, partial);
                });
              }}
            />
            <BoxManager
              box={indexInput.value?.content ?? index.content}
              onChangeBox={box =>
                set(draft => {
                  if (!draft.index) draft.index = index;
                  if (draft.index.content.id === box.id && box.type === "OUTER_BOX") draft.index.content = box;
                  else {
                    const targetIndex = draft.index.content.children.findIndex(target => target.id === box.id);
                    if (targetIndex >= 0) draft.index.content.children[targetIndex] = box;
                  }
                })
              }
            />
          </Modal>
        </Div>
      </Section>
    </Main>
  );
};
