import { Intent, Parser } from "viajs-core";
import { Index } from "../../entity/index/Index";
import { ID } from "../../constant/ID";
import { Repository } from "../../repository";
import { IndexView } from "../../view/index/IndexView";

const UpdateIndexParser = {
  index: Parser<Index>,
};

export const UpdateIndexIntent = Intent<[ID["INDEX"]], typeof UpdateIndexParser>(id => ({
  key: ["updateIndexIntent", { index: id }],
  parser: UpdateIndexParser,
  to: input => Repository.write.index.data(id, input.index),
  next: () => [IndexView(id).invalidate],
}));
