import React from 'react';
import NewInvoiceForm from './invoices/NewInvoiceForm';
import PageHeader from './PageHeader';

function NewInvoicePage(props) {
  return (
    <div>
      <PageHeader title="Add Invoice" actions={[]} />
      <NewInvoiceForm />
    </div>
  )
}

export default NewInvoicePage;
