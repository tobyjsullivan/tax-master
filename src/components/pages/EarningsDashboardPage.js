import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import DashboardBlock from './dashboards/DashboardBlock';
import DashboardNumber from './dashboards/DashboardNumber';

function EarningsDashboardPage(props) {
  return (
    <div>
      <PageHeader title="2017 Earnings" showBackNav={false} />
      <DashboardNumber title="Earnings to date" value="$23,456" />
      <DashboardNumber title="Projected 2017 earnings" value="$67,890" />
      <DashboardNumber title="Projected 2017 income tax" value="$15,432" />
      <DashboardNumber title="Monthly tax set-aside" value="$1,286" />
      <DashboardBlock>
        <Link to={`/invoices`}>See all invoices</Link>
      </DashboardBlock>
    </div>
  );
}

export default EarningsDashboardPage;
