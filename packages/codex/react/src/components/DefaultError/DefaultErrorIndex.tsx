import { PageIndex } from "../../types/Page/PageIndex";
import { DefaultError } from "./DefaultError";

export const DefaultErrorIndex: PageIndex = {
  component: () => <DefaultError />,
};
