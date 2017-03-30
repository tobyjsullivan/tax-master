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
