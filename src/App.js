import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import InvoicePage from './components/pages/InvoicePage';
import NewInvoicePage from './components/pages/NewInvoicePage';

class App extends Component {
  render() {
    return (
      <div>
        {/* Default Page */}
        <Route exact={true} path="/" component={InvoicePage} />

        <Route exact={true} path="/invoices" component={InvoicePage} />
        <Route path="/invoices/new" component={NewInvoicePage} />
      </div>
    );
  }
}

export default App;
