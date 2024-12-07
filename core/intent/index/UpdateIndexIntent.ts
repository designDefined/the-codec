import { Intent, Parser } from "viajs-core";
import { Index } from "../../entity/index/Index";
import { ID } from "../../constant/ID";
import {} from "../../../deprecated/repository-old";
import { IndexView } from "../../view/index/IndexView";
import { IndexRepository } from "@core/repository/index";

const UpdateIndexParser = {
  index: Parser<Index>,
};

export const UpdateIndexIntent = Intent<[ID["INDEX"]], typeof UpdateIndexParser>(id => ({
  key: ["updateIndexIntent", { index: id }],
  parser: UpdateIndexParser,
  to: input => IndexRepository.update(id, () => input),
  next: () => [IndexView(id).invalidate],
}));
