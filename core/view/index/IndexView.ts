import { View } from "viajs-core";
import { ID } from "../../constant/ID";
import { Index } from "../../entity/index/Index";
import { IndexRepository } from "@core/repository/index";

export const IndexView = View<[ID["INDEX"]], Index>(id => ({
  key: ["indexView", { index: id }],
  from: () => IndexRepository.read.data(id),
}));
