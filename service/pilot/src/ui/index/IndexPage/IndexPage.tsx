import { Main } from "@flexive/core";
import { IndexNavigator } from "../IndexNavigator/IndexNavigator";
import { useIndexId } from "../../../hook/useId";

export function IndexPage() {
  const indexId = useIndexId();

  return (
    <Main>
      <IndexNavigator />
      {indexId}
    </Main>
  );
}
