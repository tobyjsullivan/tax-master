import React from 'react';
import './TextInput.css';

function formatValidationErrors(errors) {
  if (errors.length === 0) {
    return '';
  }

  var k = 0;
  var listItems = errors.map(e => {
    return (<li key={k++}>{e}</li>);
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function TextInput(props) {
  var errors = props.errors;

  if (errors === undefined) {
    errors = [];
  }

  var className = '';
  if (errors.length > 0) {
    className += ' TextInput-validationError';
  }

  return (
    <div className="TextInput">
      {formatValidationErrors(errors)}
      <input className={className} type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

export default TextInput;
