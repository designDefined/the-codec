import { ID } from "@core/constant/ID";
import { Index } from "@core/entity/index/Index";
import ky from "ky";
import { toApiUrl } from "../baseUrl";

// read
const data = (id: ID["INDEX"]) => ky.get<Index>(toApiUrl(`/idx/${id}`)).json();
const summary = (id: ID["INDEX"]) => ky.get<Index>(toApiUrl(`/idx/${id}/summary`)).json();
const abstract = (id: ID["INDEX"]) => ky.get<Index>(toApiUrl(`/idx/${id}/abstract`)).json();

// create, update
const create = async (title: string) => {
  const res = await ky.post(toApiUrl(`/idx`), { json: { title } });
  return res.json();
};
const update = async (id: ID["INDEX"], updater: (prev: Index) => void) => {
  const prev = await data(id);
  return ky.put(`/idx/${id}`, { json: updater(prev) });
};

// delete
const _delete = (id: ID["INDEX"]) => ky.delete(`/idx/${id}`);

export const IndexRepository = {
  read: { data, summary, abstract },
  create,
  update,
  delete: _delete,
};
