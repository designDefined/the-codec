import { Card } from "frontend/design/src/component/surface";
import type { PropsWithChildren } from "react";

export const DashboardCard = ({ children }: PropsWithChildren) => {
  return (
    <Card grow basis={320} sizeM={280} rad={16} hide>
      {children}
    </Card>
  );
};
