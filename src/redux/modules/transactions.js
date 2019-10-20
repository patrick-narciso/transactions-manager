import { createReducer } from 'utils/redux-utils';

// Constants

const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
const INCREASE_BALANCE = 'INCREASE_BALANCE';
const DECREASE_BALANCE = 'DECREASE_BALANCE';

// Action Creators

export const createTransaction = transaction => ({
  type: CREATE_TRANSACTION,
  payload: transaction,
});

export const increaseBalance = transactionValue => ({
  type: INCREASE_BALANCE,
  payload: transactionValue,
});

export const decreaseBalance = transactionValue => ({
  type: DECREASE_BALANCE,
  payload: transactionValue,
});

// Initial State

const initialState = {
  transactions: JSON.parse(window.localStorage.getItem('transactions')) || [],
  balance: JSON.parse(window.localStorage.getItem('balance')) || 0,
};

// Reducer

export default createReducer(initialState, {
  [CREATE_TRANSACTION]: (state, action) => ({
    ...state,
    transactions: state.transactions.concat(action.payload),
  }),
  [INCREASE_BALANCE]: (state, action) => ({
    ...state,
    balance: parseFloat(state.balance) + parseFloat(action.payload),
  }),
  [DECREASE_BALANCE]: (state, action) => ({
    ...state,
    balance: parseFloat(state.balance) - parseFloat(action.payload),
  }),
});
