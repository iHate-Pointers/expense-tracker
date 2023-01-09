import React, { useState } from "react";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import Cards from "../UI/Cards";
import ExpenseList from "./ExpenseList.js";
import ExpenseChart  from "./ExpenseChart";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Cards className="expense">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses = {filteredExpense}/>
        <ExpenseList items = {filteredExpense}></ExpenseList>
        {/* {filteredExpense.length === 0 && <p>No Expense Found.</p>}
        {filteredExpense.length > 0 && (
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* React will render the above with the help of map which will create a duplicate and hence a parameter is formed. Below one is just hardcoded 
        The below shown code is static and we are grabbing each index and then working on them. above shown is dynamic*/}

        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      ></ExpenseItem> */}
      </Cards>
    </div>
  );
};

export default Expenses;
