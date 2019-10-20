import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const Table = () => {
  const { transactions } = useSelector(state => state.transactions);

  return (
    <table>
      <thead>
        <tr>
          <th className="a-text--small">Descrição</th>
          <th className="a-text--small">Valor (R$)</th>
          <th className="a-text--small">Data</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 &&
          transactions.map(transaction => (
            <tr>
              <td className="a-text--small">{transaction.description}</td>
              <td className="a-text--small">{transaction.value}</td>
              <td className="a-text--small">50</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
