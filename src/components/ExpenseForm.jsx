// components/ExpenseForm.jsx

import { useState, useContext } from "react";
import ExpenseDispatchContext from "../context/ExpenseDispatchContext";

export default function ExpenseForm() {
  const dispatch = useContext(ExpenseDispatchContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) return;

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
      },
    });

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "6px",
          border: "1px solid #ddd",
          minWidth: "220px",
        }}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "6px",
          border: "1px solid #ddd",
          minWidth: "220px",
        }}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "6px",
          border: "1px solid #ddd",
          minWidth: "220px",
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "14px",
          background: "#0f172a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Add Expense
      </button>
    </form>
  );
}