import ky from "ky";
import { SERVER_ENDPOINT } from "./constant";
import { Index } from "../entity/Index";

type Data<T> = { data: T };

const getIndex = (id: number) => ky.get<Data<Index | null>>(`${SERVER_ENDPOINT}/index/${id}`).json();
const putIndex = (id: number, body: Index) => ky.put(`${SERVER_ENDPOINT}/index/${id}`, { json: body }).json();

export const IndexRepository = { getIndex, putIndex };
