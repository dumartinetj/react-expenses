import React from "react";
import "./Summary.scss";

export const Summary = () => {
  return (
    <div id="summary">
      <h3>Current Balance</h3>
      <div className="amount">1 000 $CA</div>

      <div className="inc-exp">
        <div className="income">
          <h3>Income</h3>
          <p>500 000 $CA</p>
        </div>
        <div className="expense">
          <h3>Expense</h3>
          <p>-230 $CA</p>
        </div>
      </div>
    </div>
  );
};
