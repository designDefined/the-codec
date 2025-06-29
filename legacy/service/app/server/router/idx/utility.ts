import { ID } from "@core/constant/ID";

export const generateIndexId = (ids: string[]): ID["INDEX"] => {
  const max = ids.reduce((acc, id) => {
    const idNumber = ID.INDEX.default(0).parse(id);
    return idNumber > acc ? idNumber : acc;
  }, 0);
  return ID.INDEX.parse(max + 1);
};
