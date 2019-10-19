import { combineReducers } from 'redux';
import transactions from '../modules/transactions';

const reducer = combineReducers({
  transactions,
});

export default reducer;
