import React from "react";
import { DashboardProps } from "../../interfaces/props/component-props";
import { PageContainer } from '../page-container/page-container';

export const Dashboard = (props: DashboardProps) => {
  return (
    <PageContainer onSignOut={props.onSignOut}>
      <div>
        DASHBOARD
      </div>
    </PageContainer>
  );
}