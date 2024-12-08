import dayjs from "dayjs";
import { ID } from "../../core/constant/id";
import { Box } from "../../core/entity/box/Box";
import { Index } from "../../core/entity/index/Index";
import { user1 } from "../user/1";

export const idx1: Index = {
  id: 1 as ID["INDEX"],
  title: "NO_INDEX",
  data: { type: "BOX", id: "empty" as ID["BOX"], data: [] as Box[] },
  creator: user1,
  createTime: dayjs(),
};
