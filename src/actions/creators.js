import { REQUEST_INVOICES, RECEIVE_INVOICES } from './types';

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
