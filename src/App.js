import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { TransactionAdd } from "./components/TransactionAdd/TransactionAdd";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Summary />
        <TransactionList />
        <TransactionAdd />
      </div>
    </div>
  );
}

export default App;
