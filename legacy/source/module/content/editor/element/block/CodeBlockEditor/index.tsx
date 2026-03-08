import { Selectable } from "@component/button";
import { InputLabel, Select } from "@component/input";
import { CodeBlockElement } from "@core/entity/content/element/block/CodeBlockElement";
import { ContentEditor } from "@module/content/type";
import { CodeBlockHelper } from "../CodeBlockHelper";
import { Ul } from "@flexive/core";
import { CODE_BLOCK_LANGUAGE } from "@core/constant/content/CODE_BLOCK_LANGUAGE";

type CodeBlockEditorProps = {
  editor: ContentEditor;
  value: CodeBlockElement;
};

export const CodeBlockEditor = ({ editor, value }: CodeBlockEditorProps) => {
  return (
    <InputLabel text="Language" level={2} row alignC g={8}>
      <Select value={CodeBlockHelper.nameOfLanguage(value.language ?? "TS")} bordered f px={8} p={4} rad={4}>
        <Ul onPointerDown={e => e.preventDefault()} p={12} g={2}>
          {CODE_BLOCK_LANGUAGE.options.map(language => (
            <Selectable
              as="li"
              key={language}
              value={language === value.language}
              onChange={v => v && CodeBlockHelper.setLanguage(editor, language)}
              p={2}
              rad={2}
            >
              {CodeBlockHelper.nameOfLanguage(language)}
            </Selectable>
          ))}
        </Ul>
      </Select>
    </InputLabel>
  );
};
