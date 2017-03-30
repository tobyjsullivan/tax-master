import React from 'react';
import { connect } from 'react-redux';
import InvoiceSummary from './InvoiceSummary';
import './InvoiceList.css';

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices,
  };
};

var InvoiceList = (props) => {
  var i = 0;
  var summaries = props.invoices.map(inv => {
    return (
      <InvoiceSummary
        key={i++}
        clientName={inv.client.name}
        issueDate={inv.issueDate}
        amount={inv.amount} />
    );
  });

  if (props.invoices.size === 0) {
    summaries = (<p>There are no invoices to display.</p>);
  }

  return (
    <div className="InvoiceList">
      {summaries}
    </div>
  );
}
InvoiceList = connect(
  mapStateToProps,
)(InvoiceList);

export default InvoiceList;
