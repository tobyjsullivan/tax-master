import React from 'react';
import PeIcon from '../elements/icons/PeIcon';
import InvoiceList from './invoices/InvoiceList';
import PageHeader from './PageHeader';
import ActionButton from './ActionButton';

function InvoicePage(props) {
  var actions = [
    (
      <ActionButton path={`/invoices/new`}>
        <PeIcon icon="plus" />
      </ActionButton>
    )
  ]

  return (
    <div>
      <PageHeader title="Invoices" actions={actions} backRoute={`/`} />
      <InvoiceList />
    </div>
  );
}

export default InvoicePage;
