import { ZodTypeAny, TypeOf } from "zod";

export type TypeOfEnum<T extends { [key: string]: ZodTypeAny }> = { [key in keyof T]: TypeOf<T[key]> };
