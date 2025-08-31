import { Article, Div, Main } from "@flexive/core";
import { Card } from "frontend/design/src/component/surface";
import type { PropsWithChildren } from "react";

import { IndexDashboard } from "./IndexDashboard";

export const HomePage = () => {
  return (
    <Article f row>
      <Div f minC={80} />
      <Main f g={24} p={20} alignM>
        <Div row wrap g={20}>
          <DashboardCard>
            <IndexDashboard />
          </DashboardCard>
          <DashboardCard>User</DashboardCard>
        </Div>
        <Div row wrap g={20}>
          <DashboardCard>Codex</DashboardCard>
          <DashboardCard>Publish</DashboardCard>
        </Div>
      </Main>
      <Div f minC={80} />
    </Article>
  );
};

const DashboardCard = ({ children }: PropsWithChildren) => {
  return (
    <Card grow basis={320} sizeM={280} rad={16} hide>
      {children}
    </Card>
  );
};
