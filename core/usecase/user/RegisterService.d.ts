import { User } from "../../entity/User";

type UserPropertiesRequiredForRegister = "name" | "email" | "authorization";

export type RegisterService<
  RegisterFormInterface extends Pick<User, UserPropertiesRequiredForRegister>,
> = {
  tryRegister: (registerForm: RegisterFormInterface) => Promise<boolean>;
};
