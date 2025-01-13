import { Index } from "@core/entity/index/Index";
import { BoxReader } from "../../box/reader/BoxReader";

type IndexReaderProps = { index: Index };

export const IndexReader = ({ index }: IndexReaderProps) => <BoxReader box={index.content} />;
