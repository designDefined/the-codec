import ky from "ky";
import { Index } from "../entity/index/Index";
import { ID } from "../constant/ID";

export const Repository = {
  read: {
    index: {
      data: async (id: ID["INDEX"]) => {
        if (typeof window === "undefined") {
          const server = await import("data/api");
          const { read } = server.createDataHandler();
          return read<Index>(`/data/index/${id}/data.json`);
        }
        return ky.get<Index>(`/data/index/${id}/data.json`).json();
      },
    },
  },
  write: {
    index: {
      data: (id: ID["INDEX"], data: Index) => ky.post(`/data/index/${id}/data.json`, { json: data }).json(),
    },
  },
};
