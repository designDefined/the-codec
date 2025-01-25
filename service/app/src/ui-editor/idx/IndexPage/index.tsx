import { Article, bindCSS, Div, Main, Section } from "@flexive/core";
import styles from "./index.module.css";
import { useIndexId } from "../../../router/local/useResourceId";
import { useIntent, useView } from "viajs-react";
import { IndexInformationEditor } from "@module/index/IndexInformationEditor";
import { useCallback, useState } from "react";
import { IndexIntent } from "@core/intent/index/index";
import { IndexView } from "@core/view/index";
import { MainContent } from "@component/area";
import { BoxEditor, BoxEditorContext, BoxManager, SelectedBoxEditor, useBoxEditorRoot } from "@module/box";
import { Button } from "@component/button";
import { Chevron } from "@component/icon";
import { Box } from "@core/entity/box/Box";
import { produce } from "immer";
import { ContentEditorContext, SelectedContentEditor, useContentEditorRoot } from "@module/content";
import { MinimizableSection } from "./MinimizableSection";

const cx = bindCSS(styles);

export const IndexPage = () => {
  const id = useIndexId();
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const { value: initialIndex } = useView({ view: IndexView.data(id) });
  const { send } = useIntent({ intent: IndexIntent.update(id) });
  const [index, setIndex] = useState(initialIndex);
  const [modified, setModified] = useState(false);

  const onChangeBox = useCallback((setter: (root: Box) => void) => {
    setIndex(prev =>
      produce(prev, draft => {
        setter(draft.content);
      }),
    );
    setModified(true);
  }, []);

  const boxEditorContext = useBoxEditorRoot(index.content, onChangeBox);
  const contentEditorContext = useContentEditorRoot(
    boxEditorContext.selected?.box.type === "INNER_BOX" ? boxEditorContext.selected.box.id : undefined,
  );

  return (
    <BoxEditorContext.Provider value={boxEditorContext}>
      <ContentEditorContext.Provider value={contentEditorContext}>
        <Main className={cx("IndexPage")} row sizeC="100vh" hide>
          <Section className={cx("contentSection")} f overM py={128}>
            <MainContent
              onClick={() => boxEditorContext.clearSelected()}
              mainProps={{ onClick: e => e.stopPropagation() }}
            >
              <BoxEditor box={index.content} path={[{ id: index.content.id, name: index.content.name }]} />
            </MainContent>
          </Section>
          <Section className={cx("panelSection")} basis={isPanelOpen ? 520 : 40} row sizeM={"100vh"} hide>
            <Div className={cx("handle")} basis={40} alignM>
              <Button
                className={cx("panelButton")}
                onClick={() => send({ index }).then(() => setModified(false))}
                disabled={!modified}
                px={0}
                py={8}
                alignC
                rad={8}
              >
                저장
              </Button>
              <Button
                className={cx("panelButton")}
                onClick={() => setIsPanelOpen(prev => !prev)}
                f
                alignC
                alignM
                rad={8}
              >
                <Chevron className={cx("icon")} reversed={!isPanelOpen} />
              </Button>
            </Div>
            <Article className={cx("panels")} basis={480} hideC overM="scroll">
              <Div p={24} overM hideC>
                <MinimizableSection name="Index">
                  <IndexInformationEditor
                    index={index}
                    onChangeIndexPartial={partial => {
                      setIndex(prev =>
                        produce(prev, draft => {
                          Object.assign(draft, partial);
                        }),
                      );
                      setModified(true);
                    }}
                  />
                  <BoxManager />
                </MinimizableSection>
                <MinimizableSection name="Box">
                  <SelectedBoxEditor />
                </MinimizableSection>
                <MinimizableSection name="Content">
                  <SelectedContentEditor />
                </MinimizableSection>
              </Div>
            </Article>
          </Section>
        </Main>
      </ContentEditorContext.Provider>
    </BoxEditorContext.Provider>
  );
};
