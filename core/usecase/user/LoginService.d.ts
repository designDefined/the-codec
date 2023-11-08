import { User } from "../../entity/User";

export type LoginSerivce<UserAccessInterface, TokenInterface> = {
  tryLogin: (
    authorization: User["authorization"],
    allowAutoLogin: boolean,
  ) => Promise<UserAccessInterface>;
  tryAutoLogin: (token: TokenInterface) => Promise<UserAccessInterface>;
};
