import reducer, { createTransaction, increaseBalance, decreaseBalance } from 'redux/modules/transactions';

const initialState = {
  transactions: [],
  balance: 0,
};

describe('[redux] transactions module reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle CREATE_TRANSACTION correctly', () => {
    expect(reducer(initialState, createTransaction('transaction test'))).toEqual({
      ...initialState,
      transactions: initialState.transactions.concat('transaction test'),
    });
  });

  test('should handle INCREASE_BALANCE correctly', () => {
    expect(reducer(initialState, increaseBalance(1.2))).toEqual({
      ...initialState,
      balance: parseFloat(initialState.balance) + parseFloat(1.2),
    });
  });

  test('should handle DECREASE_BALANCE correctly', () => {
    expect(reducer(initialState, decreaseBalance(1.2))).toEqual({
      ...initialState,
      balance: parseFloat(initialState.balance) - parseFloat(1.2),
    });
  });
});
