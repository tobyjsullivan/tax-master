import React from 'react';
import './ActionButton.css';

function ActionButton(props) {
  return (
    <a className="ActionButton" onClick={props.onClick}>{props.icon}</a>
  );
}

export default ActionButton;
