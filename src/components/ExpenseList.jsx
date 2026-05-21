// components/ExpenseList.jsx

import { useContext } from "react";

import ExpenseStateContext from "../context/ExpenseStateContext";

import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useContext(
    ExpenseStateContext
  );

  if (expenses.length === 0) {
    return (
      <p
        style={{
          textAlign: "center",
          color: "#888",
          padding: "20px",
        }}
      >
        No expenses yet.
      </p>
    );
  }

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
        />
      ))}
    </div>
  );
}