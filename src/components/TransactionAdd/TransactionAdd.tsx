import React, { useState } from "react";
import "./TransactionAdd.scss";

export const TransactionAdd = () => {
  const [category, setCategory] = useState('')
  return (
    <div id="transaction-add">
      <h3>Add transaction</h3>

      <form>
        <div className="form-control">
          <select name="category" defaultValue="" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="" disabled>
              Category
            </option>
            <optgroup label="Incomes">
              <option value="salary">Salary</option>
              <option value="freelance">Freelance</option>
              <option value="other">Other</option>
            </optgroup>
            <optgroup label="Expenses">
              <option value="housing">Housing</option>
              <option value="groceries">Groceries</option>
              <option value="services">Services</option>
              <option value="shopping">Online shopping</option>
            </optgroup>
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
