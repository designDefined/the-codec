import { Article, bindCSS, Button, Main, Section } from "@flexive/core";
import styles from "./index.module.css";
import { useIndexId } from "../../../router/local/useResourceId";
import { useIntentSubmit, useView } from "viajs-react";
import { IndexView } from "@core/view/index/IndexView";
import { UpdateIndexIntent } from "@core/intent/index/UpdateIndexIntent";
import { BoxEditor } from "@module/box/BoxEditor";
import { BoxManager } from "@module/box/BoxManager";
import { Modal } from "@compoent/area/modal/Modal";
import { IndexInformationEditor } from "@module/index/IndexInformationEditor";

const cx = bindCSS(styles);

export const IndexPage = () => {
  const id = useIndexId();
  const { value: index } = useView({ view: IndexView(id) });
  const {
    set,
    submit,
    value: { index: indexInput },
    isModified,
  } = useIntentSubmit({ intent: UpdateIndexIntent(id) });

  return (
    <Main className={cx("IndexPage")} f={{ flow: ["row"] }}>
      <Section f={{ flex: [1, 1, 0] }} />
      <Article f={{ flex: [1, 0, 720], flow: ["row"] }}>
        <Section f={{ flex: [1, 1] }}>
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
        </Section>
      </Article>
      <Section f={{ flex: [1, 1, 0] }} />

      <Article className={cx("rightOverlay")} f={{ flow: ["row-reverse"] }}>
        <Section f={{ flex: [0, 0, 240], spacing: [16, 24] }}>
          <Modal f={{ spacing: [16] }}>
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
          <Button onClick={() => submit()} disabled={!isModified}>
            저장
          </Button>
        </Section>
      </Article>
    </Main>
  );
};
