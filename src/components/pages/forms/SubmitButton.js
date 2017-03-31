import React from 'react';
import './SubmitButton.css';

function SubmitButton(props) {
  return (
    <div className="SubmitButton">
      <input type="submit" value={props.text} />
    </div>
  );
}

SubmitButton.defaultProps = {
  text: "Submit"
}

export default SubmitButton;
