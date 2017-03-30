import { combineReducers } from 'redux'
import { List } from 'immutable';
import { ADD_INVOICE } from './actions/types';

function invoices(state = List([]), action) {
  switch (action.type) {
    case ADD_INVOICE:
      state = state.push({
        client: {
          name: action.payload.clientName
        },
        issueDate: action.payload.issueDate,
        amount: action.payload.amount
      });
      return state;
    default:
      return state;
  }
}

const appReducer = combineReducers({
  invoices,
});

export default appReducer;
