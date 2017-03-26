import { Map, List } from 'immutable';
import { ADD_INVOICE } from './actions/types';

function initState(state) {
  if (state === undefined) {
    state = Map({});
  }

  if (!state.has('invoices')) {
    state = state.set('invoices', List([]));
  }

  return state;
}

function addInvoice(state, payload) {
  var invoices = state.get('invoices').push({
    client: {
      name: payload.clientName,
    },
    issueDate: payload.issueDate,
    amount: payload.amount,
  });

  return state.set('invoices', invoices);
}

const appReducer = (state, action) => {
  state = initState(state);

  if (action.error) {
    console.error("ERROR", action.payload);
    return state;
  }

  switch (action.type) {
    case ADD_INVOICE:
      return addInvoice(state, action.payload);
    default:
      return state;
  }
};

export default appReducer;
