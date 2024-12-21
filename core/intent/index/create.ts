import { TITLE } from "@core/constant/TEXT";
import { IndexRepository } from "@core/repository/index";
import { IndexView } from "@core/view/index";
import { Intent } from "viajs-core";

export const CreateIntent = Intent<[], typeof TITLE.parse>(() => ({
  key: ["intent", "index", "create"],
  parser: TITLE.parse,
  to: IndexRepository.create,
  next: () => [IndexView.summaries().invalidate],
}));
