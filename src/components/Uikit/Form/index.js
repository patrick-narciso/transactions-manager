import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from 'hooks/useLocalStorage';
import { currencyToFloat } from 'utils/form';
import { createTransaction, increaseBalance, decreaseBalance } from 'redux/modules/transactions';

const Form = () => {
  const dispatch = useDispatch();
  const { transactions, balance } = useSelector(state => state.transactions);
  const [inputs, setInputs] = useState({ description: '', value: '', type: 'credit' });
  const [isFormValid, setIsFormValid] = useState(false);
  const [, setTransactions] = useLocalStorage('transactions', []);
  const [, setBalance] = useLocalStorage('balance', 0);

  useEffect(() => {
    setTransactions(transactions);
    setBalance(balance);
  });

  const handleValidation = () => {
    if (!inputs.description || !inputs.value) {
      return setIsFormValid(false);
    }
    return setIsFormValid(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const transaction = Object.assign({ date: Date.now() }, inputs);
    transaction.value = currencyToFloat(transaction.value);
    dispatch(createTransaction(transaction));
    if (transaction.type === 'credit') {
      return dispatch(increaseBalance(transaction.value));
    }
    return dispatch(decreaseBalance(transaction.value));
  };

  return (
    <form>
      <div className="a-input" style={{ marginBottom: '15px' }}>
        <input
          id="description"
          type="text"
          name="description"
          value={inputs.description}
          onBlur={() => handleValidation()}
          onChange={e => setInputs({ ...inputs, [e.target.name]: e.target.value })}
          aria-labelledby="description"
        />
        <label id="description" htmlFor="description">
          Descrição
        </label>
      </div>
      <div style={{ marginBottom: '15px' }} className="a-input">
        <input
          id="value"
          type="text"
          name="value"
          onBlur={() => handleValidation()}
          placeholder="0,00"
          value={inputs.value}
          onChange={e => setInputs({ ...inputs, [e.target.name]: e.target.value })}
          aria-labelledby="value"
        />
        <label id="value" htmlFor="value">
          Valor (R$)
        </label>
      </div>
      <div style={{ marginBottom: '10px' }} className="a-radio">
        <label htmlFor="credit">Crédito</label>
        <input
          type="radio"
          id="credit"
          value="credit"
          onBlur={() => handleValidation()}
          checked={inputs.type === 'credit'}
          onChange={e => setInputs({ ...inputs, [e.target.name]: e.target.value })}
          name="type"
        />
        <span className="a-radio__shape" />
      </div>
      <div style={{ marginBottom: '30px' }} className="a-radio">
        <label htmlFor="debit">Débito</label>
        <input
          type="radio"
          id="debit"
          value="debit"
          onBlur={() => handleValidation()}
          checked={inputs.type === 'debit'}
          name="type"
          onChange={e => setInputs({ ...inputs, [e.target.name]: e.target.value })}
        />
        <span className="a-radio__shape" />
      </div>
      <button
        style={{ width: '100%' }}
        disabled={!isFormValid}
        onClick={e => handleSubmit(e)}
        type="button"
        className="a-btn a-btn--uranus a-btn--medium">
        Efetuar Transação
      </button>
    </form>
  );
};

export default Form;
