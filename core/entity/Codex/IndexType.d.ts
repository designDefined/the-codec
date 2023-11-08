import { Codex } from ".";
import { UniqueId } from "../.shared/Id";

type Base = {
  id: UniqueId;
  rootCodexId: Codex["id"];
};

/**
 * Plain Index
 */
type PlainText = {
  type: ["plain", "text"];
  text: string;
};

type PlainImage = {
  type: ["plain", "image"];
  url: string;
  alternativeText: string;
};

export type Index = Base & (PlainText | PlainImage);
