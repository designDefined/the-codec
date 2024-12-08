import { ID } from "@core/constant/ID";
import { Index } from "@core/entity/index/Index";
import ky from "ky";

export const StaticRepository = {
  index: {
    data: (id: ID["INDEX"]) =>
      ky
        .get<Index>(`/data/index/${id}/data.json`)
        .json()
        .catch(() => null),
  },
};
