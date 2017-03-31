import React from 'react';
import './DashboardBlock.css';

function DashboardBlock(props) {
  return (
    <div className="DashboardBlock">
      {props.children}
    </div>
  )
}

export default DashboardBlock;
