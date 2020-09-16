import React, { useState } from "react";
import "./TransactionAdd.scss";

export const TransactionAdd = () => {
  return (
    <div id="transaction-add">
      <h3>Add transaction</h3>

      <form>
        <div className="form-control">
          <select name="category" defaultValue="" required>
            <option value="" disabled>
              Category
            </option>
            <option value="income">Income</option>
            <option value="income">Groceries</option>
            <option value="income">Services</option>
            <option value="income">Online shopping</option>
          </select>
        </div>

        <div className="form-control">
          <input type="text" name="label" placeholder="Label" required></input>
        </div>

        <div className="form-control">
          <input
            type="number"
            name="amount"
            placeholder="Amount (- / +)"
            required
          ></input>
        </div>

        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
