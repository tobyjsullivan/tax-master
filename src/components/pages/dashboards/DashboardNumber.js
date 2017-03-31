import React from 'react';
import DashboardBlock from './DashboardBlock';
import './DashboardNumber.css';

function DashboardNumber(props) {
  return (
    <DashboardBlock className="DashboardNumber">
      <p className="DashboardNumber-title">{props.title}</p>
      <p className="DashboardNumber-value">{props.value}</p>
    </DashboardBlock>
  );
}

export default DashboardNumber;
