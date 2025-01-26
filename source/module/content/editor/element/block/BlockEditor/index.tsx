import styles from "./index.module.css";
import { BlockElement } from "@core/entity/content/element/Element";
import { bindCSS, Section, Ul } from "@flexive/core";
import { ContentEditor } from "@module/content/type";
import { Selectable } from "@component/button";
import { HeadingEditor } from "../HeadingEditor";
import { InputLabel, Select } from "@component/input";
import { BLOCK_TYPE } from "@core/constant/content/ELEMENT_TYPE";
import { BlockHelper } from "../BlockHelper";
import { HeadingHelper } from "../HeadingHelper";
import { useCallback, useMemo } from "react";
import { ParagraphHelper } from "../ParagraphHelper";
import { ParagraphEditor } from "../ParagraphEditor";
import { EditorPanel } from "@component/area";
import { CodeBlockHelper } from "../CodeBlockHelper";
import { CodeBlockEditor } from "../CodeBlockEditor";

const cx = bindCSS(styles);

type BlockEditorProps = {
  editor: ContentEditor;
  value: BlockElement[];
};

export const BlockEditor = ({ editor, value }: BlockEditorProps) => {
  const changeTypeTo = useCallback(
    (type: BLOCK_TYPE) => {
      BlockHelper.normalizeBlock(editor);
      if (type === "PARAGRAPH") ParagraphHelper.toParagraph(editor);
      if (type === "HEADING") HeadingHelper.toHeading(editor);
      if (type === "CODE_BLOCK") CodeBlockHelper.toCodeBlock(editor);
    },
    /** No deps needed, editor is a mutable reference. */
    [],
  );

  const selectedType = useMemo(() => {
    const uniqueTypes = new Set(value.map(v => v.type));
    if (uniqueTypes.size === 0) return undefined;
    const mainType = BlockHelper.nameOfType(value[0].type);
    if (uniqueTypes.size === 1) return mainType;
    return `${mainType} & ${uniqueTypes.size - 1} more`;
  }, [value]);

  if (value.length === 0) return null;

  return (
    <EditorPanel className={cx("BlockEditor")} g={8}>
      <InputLabel text="Block" row alignC g={8}>
        <Select value={selectedType} bordered f px={8} p={4} rad={4}>
          <Ul onPointerDown={e => e.preventDefault()} p={12} g={2}>
            {BLOCK_TYPE.options.map(type => (
              <Selectable
                as="li"
                key={type}
                value={value.map(v => v.type).includes(type)}
                onChange={v => v && changeTypeTo(type)}
                px={4}
                py={2}
                rad={4}
              >
                {BlockHelper.nameOfType(type)}
              </Selectable>
            ))}
          </Ul>
        </Select>
      </InputLabel>
      {value.length === 1 && <BlockDetailEditor editor={editor} value={value[0]} />}
    </EditorPanel>
  );
};

type BlockDetailEditorProps = {
  editor: ContentEditor;
  value: BlockElement;
};

export const BlockDetailEditor = ({ editor, value }: BlockDetailEditorProps) => {
  return (
    <Section>
      {value.type === "PARAGRAPH" && <ParagraphEditor editor={editor} value={value} />}
      {value.type === "HEADING" && <HeadingEditor editor={editor} value={value} />}
      {value.type === "CODE_BLOCK" && <CodeBlockEditor editor={editor} value={value} />}
    </Section>
  );
};
