import { z } from "zod";

const integerId = z.coerce.number().int();
const uuid = z.string().uuid();

export { integerId, uuid };
