import { IndexSummary } from "@core/entity/index/IndexSummary";
import { IndexRepository } from "@core/repository/index";
import { View } from "viajs-core";
export const SummariesView = View<[], (IndexSummary | null)[]>(() => ({
  key: ["view", "index", "summaries"],
  from: IndexRepository.read.summaries,
}));
