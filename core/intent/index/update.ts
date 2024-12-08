import { Intent, Parser } from "viajs-core";
import { Index } from "../../entity/index/Index";
import { ID } from "../../constant/ID";
import {} from "../../../deprecated/repository-old";
import { IndexRepository } from "@core/repository/index";
import { IndexView } from "@core/view/index";

const UpdateParser = {
  index: Parser<Index>,
};

export const UpdateIntent = Intent<[ID["INDEX"]], typeof UpdateParser>(id => ({
  key: ["intent", "index", "update", { index: id }],
  parser: UpdateParser,
  to: ({ index }) => IndexRepository.update(id, () => index),
  next: () => [IndexView.data(id).invalidate],
}));
