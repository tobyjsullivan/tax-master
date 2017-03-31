import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import EarningsDashboardPage from './components/pages/EarningsDashboardPage';
import InvoicePage from './components/pages/InvoicePage';
import NewInvoicePage from './components/pages/NewInvoicePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Default Page */}
        <Route exact={true} path="/" component={EarningsDashboardPage} />

        <Route exact={true} path="/invoices" component={InvoicePage} />
        <Route path="/invoices/new" component={NewInvoicePage} />
      </div>
    );
  }
}

export default App;
