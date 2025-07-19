import type { Times } from "./common.types";

interface User extends Times {
  id: number;
  name: string;
}

export type { User };
