import { TITLE } from "@core/constant/TEXT";
import { Index } from "@core/entity/index/Index";
import { z } from "zod";

const IndexInitDto = z.object({ title: TITLE }).transform(({ title }): Index => {
  return { title };
});
