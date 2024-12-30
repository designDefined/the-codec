import { bindCSS, Button, Div, Main, Section } from "@flexive/core";
import styles from "./index.module.css";
import { useIndexId } from "../../../router/local/useResourceId";
import { useIntentSubmit, useView } from "viajs-react";
import { IndexInformationEditor } from "@module/index/IndexInformationEditor";
import { useState } from "react";
import { IndexIntent } from "@core/intent/index/index";
import { IndexView } from "@core/view/index";
import { MainContent } from "@compoent/area";
import { BoxEditor, BoxEditorProvider, SelectedBoxEditor } from "@module/box";

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

  const indexToEdit = indexInput.value ?? index;

  return (
    <BoxEditorProvider
      root={indexToEdit.content}
      onChangeRoot={setter => {
        set(draft => {
          if (!draft.index) draft.index = index;
          setter(draft.index.content);
        });
      }}
    >
      <Main className={cx("IndexPage")} row sizeC="100vh" hide>
        <Section className={cx("contentSection")} f overM py={128}>
          <MainContent>
            <BoxEditor box={indexToEdit.content} path={[]} />
          </MainContent>
        </Section>

        <Section className={cx("panelSection")} row basis={isPanelOpen ? 400 : 48} sizeM={"100vh"}>
          <Div basis={40} g={16} py={4}>
            <Button className={cx("panelButton")} onClick={submit} disabled={!isModified} px={0} py={8} alignC rad={8}>
              저장
            </Button>
            <Button className={cx("panelButton")} onClick={() => setIsPanelOpen(prev => !prev)} f alignC alignM rad={8}>
              {isPanelOpen ? ">" : "<"}
            </Button>
          </Div>
          <Div absolute left={40} top={0} f sizeC={320} px={12} py={24} g={30} overM>
            <IndexInformationEditor
              index={indexInput.value ?? index}
              onChangeIndexPartial={partial => {
                set(draft => {
                  if (!draft.index) draft.index = index;
                  Object.assign(draft.index, partial);
                });
              }}
            />
            <SelectedBoxEditor />
            {/* <BoxManager
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
            /> */}
          </Div>
        </Section>
      </Main>
    </BoxEditorProvider>
  );
};
