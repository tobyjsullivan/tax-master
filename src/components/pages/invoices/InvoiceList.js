import React from 'react';
import { connect } from 'react-redux';
import InvoiceSummary from './InvoiceSummary';
import './InvoiceList.css';

const mapStateToProps = (state) => {
  return {
    invoices: state.get('invoices'),
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
