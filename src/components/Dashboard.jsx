// components/Dashboard.jsx

import { useContext } from "react";

import AuthStateContext from "../context/AuthStateContext";
import AuthDispatchContext from "../context/AuthDispatchContext";

import ExpenseStateContext from "../context/ExpenseStateContext";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function Dashboard() {
  const authState = useContext(AuthStateContext);

  const authDispatch = useContext(
    AuthDispatchContext
  );

  const { expenses } = useContext(
    ExpenseStateContext
  );

  const totalBalance = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}

      <div
        style={{
          background: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: "700",
          }}
        >
          Track
          <span
            style={{
              color: "#4f46e5",
            }}
          >
            Spend
          </span>
        </h2>

        <button
          onClick={() =>
            authDispatch({
              type: "LOGOUT",
            })
          }
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            background: "white",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* MAIN */}

      <div
        style={{
          maxWidth: "1100px",
          margin: "30px auto",
          padding: "0 20px",
        }}
      >
        {/* BALANCE CARD */}

        <div
          style={{
            background:
              "linear-gradient(to right,#4338ca,#4f46e5)",
            padding: "35px",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(79,70,229,0.3)",
          }}
        >
          <p
            style={{
              margin: 0,
              opacity: 0.8,
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            TOTAL EXPENSES
          </p>

          <h1
            style={{
              marginTop: "10px",
              fontSize: "52px",
              marginBottom: 0,
            }}
          >
            Rs.{totalBalance.toFixed(2)}
          </h1>
        </div>

        {/* WELCOME */}

        <h2
          style={{
            marginTop: "25px",
            color: "#222",
          }}
        >
          Welcome, {authState.user}
        </h2>

        {/* FORM */}

        <div
          style={{
            background: "white",
            marginTop: "25px",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Add New Expense
          </h3>

          <ExpenseForm />
        </div>

        {/* LIST */}

        <div
          style={{
            background: "white",
            marginTop: "25px",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}