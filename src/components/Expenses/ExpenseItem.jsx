import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHeandler = () => {
    setTitle("change");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} year={props.year} day={props.day} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHeandler}>change value</button>
    </Card>
  );
};

export default ExpenseItem;
