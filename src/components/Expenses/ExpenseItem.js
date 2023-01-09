import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Cards from "../UI/Cards.js";

const ExpenseItem = (props) => {
  //This makes your code a lil more readable and reusable. is not used rather props are used.
  // const expenseDate = new Date(2022, 11, 16);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = "2000.00";

  // const [title, setTitle] = useState(props.title); //This gives access to this function
  // const clickHandler = () => {
  //   setTitle('hello world');
  //   console.log(` ${title} has been updated `);
  // }

  return (
    <li>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
        {/* <button onClick = {clickHandler}>Update</button> */}
      </Cards>
    </li>
  );
};

export default ExpenseItem;
