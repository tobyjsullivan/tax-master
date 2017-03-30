import fetch from 'isomorphic-fetch';
import { requestInvoices, receiveInvoices } from './creators';

export function fetchInvoices() {
  return function(dispatch) {
    dispatch(requestInvoices())

    return fetch(`http://localhost:8080/invoices`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveInvoices(json));
      });
  }
}

export function saveInvoice(invoice) {
  return function(dispatch) {
    var content = JSON.stringify({
      client: {
        name: invoice.clientName,
      },
      issueDate: invoice.issueDate,
      amount: {
        currency: "CAD",
        value: invoice.amount * 100
      }
    });

    var fetchOpts = {
      method: 'POST',
      body: content,
      headers: {
        'Content-Type': 'application/json',
      }
    }

    return fetch(`http://localhost:8080/invoices`, fetchOpts)
      .then(response => {
        dispatch(fetchInvoices());
      });
  }
}
