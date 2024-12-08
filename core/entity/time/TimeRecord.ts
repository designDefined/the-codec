import { TimeStamp } from "./TimeStamp";

export type TimeRecord = {
  createdAt: TimeStamp;
  updatedAt?: TimeStamp;
};
