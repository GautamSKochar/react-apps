import React from "react";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Input from "../UI/Input";
// import "./ExpenseForm.css";
import styles from "./ExpenseForm.module.css";

const ExpenseFrom = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const amountRef = useRef();
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const [isValid, setIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    // // Example for ref only for amount field
    // if (amountRef.current.value.trim().length === 0) {
    //   amountRef.current.focus();
    //   return;
    // }

    if (!amount) {
      amountRef.current.focus();
      return;
    }
    if (!expenseData.amount || !expenseData.title || !expenseData.date) {
      setIsValid(false);
      return;
    }
    props.onSaveExpenseData(expenseData);
    clearForm();
  };

  const clearErrorHandler = () => {
    clearForm();
  };

  const clearForm = () => {
    setIsValid(true);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <React.Fragment>
      {!isValid && (
        <ErrorModal
          title="An error occuered while adding expense!"
          message="Please fill all fields!"
          onConfirm={clearErrorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={styles.expense__controls}>
          <Input
            id="title"
            type="text"
            value={title}
            isValid={isValid}
            label="Title"
            onChange={titleChangeHandler}
          />

          {/* Todo: Add validations */}

          <Input
            ref={amountRef}
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            isValid={isValid}
            label="Amount"
            onChange={amountChangeHandler}
          />

          {/* Todo: Add validations  */}

          <Input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            isValid={isValid}
            label="Date"
            onChange={dateChangeHandler}
          />
        </div>
        <div className={styles["new-expense__actions"]}>
          <button type="button" onClick={() => props.onCancelEdit()}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ExpenseFrom;
