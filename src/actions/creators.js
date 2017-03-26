import { ADD_INVOICE } from './types';

export const addInvoice = (invoice) => {
  return {
    type: ADD_INVOICE,
    payload: invoice,
  }
};
