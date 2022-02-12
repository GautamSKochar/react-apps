import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = { ...newExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseFrom
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEdit={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
