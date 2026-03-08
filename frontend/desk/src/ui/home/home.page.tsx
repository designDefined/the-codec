import { Article, Div, Main } from "@flexive/core";

import { DashboardCard } from "./DashboardCard";
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
          <DashboardCard />
        </Div>
        <Div row wrap g={20}>
          <DashboardCard />
          <DashboardCard />
        </Div>
      </Main>
      <Div f minC={80} />
    </Article>
  );
};
