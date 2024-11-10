import ky from "ky";
import { Index } from "../entity/index/Index";
import { ID } from "../constant/ID";

export const Repository = {
  read: {
    index: {
      data: (id: ID["INDEX"]) => ky.get<Index>(`/data/index/${id}/data.json`).json(),
    },
  },
  write: {
    index: {
      data: (id: ID["INDEX"], data: Index) => ky.post(`/data/index/${id}/data.json`, { json: data }).json(),
    },
  },
};
