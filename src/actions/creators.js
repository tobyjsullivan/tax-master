import { REQUEST_INVOICES, RECEIVE_INVOICES, ADD_INVOICE } from './types';

export const requestInvoices = () => {
  return {
    type: REQUEST_INVOICES
  };
}

export const receiveInvoices = (json) => {
  return {
    type: RECEIVE_INVOICES,
    payload: json.payload
  }
}

export const addInvoice = (invoice) => {
  return {
    type: ADD_INVOICE,
    payload: invoice,
  }
};
