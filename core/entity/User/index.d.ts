import { PublidId } from "../.shared/Id";
import { Authorization } from "../.shared/Authorization";

export type User = {
  id: PublidId;
  name: string; // must be unique
  email: string; // used as single source of truth
  authorization: Authorization;
};
