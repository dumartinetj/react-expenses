import React from "react";
import "./TransactionList.scss";

export const TransactionList = () => {
  return (
    <div id="transaction-list">
      <h3>Transactions</h3>
      <p className="m-0">No transaction</p>
      <ul>
        <li className="income">
          <div>Salaire</div>
          <div>
            + 4 000 $CA
            <button className="btn-delete">X</button>
          </div>
        </li>
        <li className="expense">
          <div>Achat TV</div>
          <div>
            - 1 000 $CA
            <button className="btn-delete">X</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
