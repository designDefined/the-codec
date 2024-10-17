import { Dayjs } from "dayjs";
import { User } from "../user/User";

export type Metadata = {
  creator: User;
  createTime: Dayjs;
  modifyTime?: Dayjs;
};
