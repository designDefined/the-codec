import { Article, bindCSS, Div, Main, Section } from "@flexive/core";
import styles from "./index.module.css";
import { useIndexId } from "../../../router/local/useResourceId";
import { useIntent, useView } from "viajs-react";
import { IndexInformationEditor } from "@module/index/IndexInformationEditor";
import { useCallback, useEffect, useState } from "react";
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
import { useThemeStyle } from "@module/box/look";

const cx = bindCSS(styles);

/**
 * TODO: Isolate to separate module
 */
const beforeUnloadHandler: EventListener = event => {
  // Recommended
  event.preventDefault();
  // Included for legacy support, e.g. Chrome/Edge < 119
  event.returnValue = true;
};

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

  const themeStyle = useThemeStyle(index.content.look.theme);

  useEffect(() => {
    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () => window.removeEventListener("beforeunload", beforeUnloadHandler);
  }, []);

  return (
    <BoxEditorContext.Provider value={boxEditorContext}>
      <ContentEditorContext.Provider value={contentEditorContext}>
        <Main className={cx("IndexPage")} row sizeC="100vh" hide style={themeStyle}>
          <Section className={cx("contentSection")} f overM py={128}>
            <MainContent
              onClick={() => boxEditorContext.clearSelected()}
              mainProps={{ onClick: e => e.stopPropagation() }}
            >
              <BoxEditor box={index.content} path={[{ id: index.content.id, name: index.content.name }]} />
            </MainContent>
            <Div className={cx("handle")} fixed top={0} right={isPanelOpen ? 480 : 0} sizeM="100vh">
              <Button onClick={() => send({ index }).then(() => setModified(false))} disabled={!modified} alignC p={8}>
                Save{modified ? "?" : "d"}
              </Button>
              <Div f alignM alignC="end">
                <Button onClick={() => setIsPanelOpen(prev => !prev)} px={8} py={24}>
                  <Chevron className={cx("icon")} size={16} reversed={!isPanelOpen} />
                </Button>
              </Div>
            </Div>
          </Section>
          <Section className={cx("panelSection")} basis={isPanelOpen ? 480 : 0} row sizeM={"100vh"} hide>
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
