import { combineReducers } from 'redux'
import { List } from 'immutable';
import { REQUEST_INVOICES, RECEIVE_INVOICES } from './actions/types';

function invoices(state = {
    isFetching: false,
    items: List([])
  }, action) {
  switch (action.type) {
    case REQUEST_INVOICES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_INVOICES:
      var invoices = action.payload.map(child => {
        return {
          id: child.id,
          client: {
            id: child.client.id,
            name: child.client.name
          },
          issueDate: child.issueDate,
          amount: child.amount.value / 100
        };
      });
      var items = List(invoices);
      return Object.assign({}, state, {
        isFetching: false,
        items: items
      });
    default:
      return state;
  }
}

const appReducer = combineReducers({
  invoices,
});

export default appReducer;
