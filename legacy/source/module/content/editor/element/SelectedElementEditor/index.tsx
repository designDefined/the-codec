import { ContentEditor } from "@module/content/type";
import { useMemo } from "react";
import { Editor } from "slate";
import { BlockElement, InlineElement } from "@core/entity/content/element/Element";
import { BlockEditor } from "../block/BlockEditor";
import { BlockHelper } from "../block/BlockHelper";
import { InlineHelper } from "../inline/InlineHelper/InlineHelper";
import { InlineEditor } from "../inline/InlineEditor";
import { Article } from "@flexive/core";

type SelectedElementEditorProps = {
  editor: ContentEditor;
  count: number;
};

export const SelectedElementEditor = ({ editor, count }: SelectedElementEditorProps) => {
  const blocks = useMemo(() => {
    if (!editor.selection) return [];
    return Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, editor.selection),
        match: BlockHelper.isBlock,
        mode: "highest",
      }),
    ).map(([element]) => element as BlockElement);
  }, [count]);

  const inlines = useMemo(() => {
    if (!editor.selection) return [];
    return Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, editor.selection),
        match: InlineHelper.isInline,
      }),
    ).map(([element]) => element as InlineElement);
  }, [count]);

  return (
    <Article g={6} onPointerDown={e => e.preventDefault()}>
      <BlockEditor editor={editor} value={blocks} />
      <InlineEditor editor={editor} value={inlines[0]} />
    </Article>
  );
};
