import React from 'react';
import { Link } from 'react-router-dom';
import PeIcon from '../elements/icons/PeIcon';
import './PageHeader.css';

function PageHeader(props) {
  var actionButton = '';
  if (props.actions === undefined || props.actions.length === 0) {
    actionButton = '';
  } else if (props.actions.length === 1) {
    actionButton = props.actions[0];
  } else {
    // TODO
  }

  var backLink = (<div></div>);
  if(props.backRoute !== null) {
    backLink = (
      <Link to={props.backRoute}>
        <PeIcon icon="angle-left" />
      </Link>
    );
  }

  return (
    <div className="PageHeader">
      {backLink}
      <h2 className="PageHeader-title">{props.title}</h2>
      <div className="PageHeader-actionMenu">
        {actionButton}
      </div>
    </div>
  );
}

PageHeader.defaultProps = {
  backRoute: null
};

export default PageHeader;
