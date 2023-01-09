import React, { useState } from "react";

import Expenses from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

//Dummy data to initialize our state
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2023, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.5,
    date: new Date(2025, 5, 12),
  },
  {
    id: "e5", 
    title: "ZE boll",
    amount: 400.5,
    date: new Date(2022, 5, 12),
  },
  //Idk why but the date's month is from index 0 - 11 (January to December)
];

const App = () => {
  //This will deal with props which is basically creating an object that can edit a component
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); //Destructuring since useState has 2 return types

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    //This is a JSX code, we don't see this in normal JS.
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
};
export default App;
