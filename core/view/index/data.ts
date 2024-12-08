import { View } from "viajs-core";
import { ID } from "../../constant/ID";
import { Index } from "../../entity/index/Index";
import { IndexRepository } from "@core/repository/index";

export const DataView = View<[ID["INDEX"]], Index>(id => ({
  key: ["view", "index", "data", { index: id }],
  from: () => IndexRepository.read.data(id),
}));
