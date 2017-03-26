import React from 'react';
import './PageHeader.css';

function PageHeader(props) {
  var actionButton = [];
  if (props.actions.length > 1) {
    // TODO
  } else if (props.actions.length === 1) {
    actionButton = props.actions[0];
  }

  return (
    <div className="PageHeader">
      <div className="PageHeader-backNav" />
      <h2 className="PageHeader-title">{props.title}</h2>
      <div className="PageHeader-actionMenu">
        {actionButton}
      </div>
    </div>
  );
}

export default PageHeader;
