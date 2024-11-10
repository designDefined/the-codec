import { View } from "viajs-core";
import { ID } from "../../constant/ID";
import { Repository } from "../../repository";
import { Index } from "../../entity/index/Index";

export const IndexView = View<[ID["INDEX"]], Index>(id => ({
  key: ["indexView", { index: id }],
  from: () => Repository.read.index.data(id),
}));
