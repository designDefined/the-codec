import { Main } from "@flexive/core";

import { Button } from "../component/action";
import { Card } from "../component/surface/Card";

export function App() {
  return (
    <Main sizeC="100vw" sizeM="100vh" alignC alignM g={16}>
      <Button p={12} rad={8}>
        Hello!
      </Button>
      <Card sizeC={120} sizeM={120} alignC alignM rad={12}>
        World
      </Card>
    </Main>
  );
}
