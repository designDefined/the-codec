import { renderStatic } from "../config/render/renderStatic";
import { InboxContent } from "core/entity/content/InboxContent";

type ReaderProps = { value: InboxContent[] };

export const Reader = ({ value }: ReaderProps) => value.map(renderStatic);
