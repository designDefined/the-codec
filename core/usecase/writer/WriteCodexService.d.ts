import { Codex } from "../../entity/Codex";

type CodexPropertiesRequiredToWrite = "title" | "contents";

export type WriteCodexService<
  CodexFormInterface extends Pick<Codex, CodexPropertiesRequiredToWrite>,
> = {
  writeCodex: (
    codex: CodexFormInterface,
  ) => Promise<{ writtenCodexId: Codex["id"] }>;
};
