import React from 'react';
import InvoiceList from './invoices/InvoiceList';
import PageHeader from './PageHeader';
import ActionButton from './ActionButton';

function InvoicePage(props) {
  var actions = [
    (<ActionButton icon="&nbsp;+&nbsp;" onClick={() => props.history.push("/invoices/new")} />),
  ]

  return (
    <div>
      <PageHeader title="Invoices" actions={actions} />
      <InvoiceList />
    </div>
  );
}

export default InvoicePage;
