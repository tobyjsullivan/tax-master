import React from 'react';
import DisplayDate from '../../elements/DisplayDate';
import './InvoiceSummary.css';

function InvoiceSummary(props) {
  return (
    <div className="InvoiceSummary">
      <div className="InvoiceSummary-leftColumn">
        <p className="InvoiceSummary-clientName">{props.clientName}</p>
        <p className="InvoiceSummary-issueDate">
          <DisplayDate date={props.issueDate} />
        </p>
      </div>
      <div className="InvoiceSummary-rightColumn">
        <p className="InvoiceSummary-amount">${props.amount}</p>
      </div>
    </div>
  );
}

export default InvoiceSummary;
