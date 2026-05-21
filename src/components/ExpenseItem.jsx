// components/ExpenseItem.jsx

import { useContext } from "react";
import ExpenseDispatchContext from "../context/ExpenseDispatchContext";

export default function ExpenseItem({ expense }) {
  const dispatch = useContext(ExpenseDispatchContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px",
        border: "1px solid #eee",
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    >
      <div>
        <h3
          style={{
            margin: 0,
            color: "#222",
          }}
        >
          {expense.title}
        </h3>

        <p
          style={{
            margin: "5px 0 0 0",
            color: "#666",
          }}
        >
          {expense.category}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#4f46e5",
          }}
        >
          ₹{expense.amount}
        </h3>

        <button
          onClick={() =>
            dispatch({
              type: "DELETE_EXPENSE",
              payload: expense.id,
            })
          }
          style={{
            padding: "10px 14px",
            background: "crimson",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}