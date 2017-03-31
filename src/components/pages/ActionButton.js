import React from 'react';
import { Link } from 'react-router-dom';
import './ActionButton.css';

function ActionButton(props) {
  return (
    <Link to={props.path}>
      {props.children}
    </Link>
  );
}

export default ActionButton;
