// components/Login.jsx

import { useState, useContext } from "react";
import AuthDispatchContext from "../context/AuthDispatchContext";

export default function Login() {
  const [username, setUsername] = useState("");

  const dispatch = useContext(AuthDispatchContext);

  const handleLogin = () => {
    if (!username.trim()) return;

    dispatch({
      type: "LOGIN",
      payload: username,
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "white",
          padding: "40px 30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "32px",
            fontWeight: "700",
            color: "#111",
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            color: "#777",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Sign in to manage your expenses.
        </p>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "20px",
            outline: "none",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            background:
              "linear-gradient(to right,#4338ca,#4f46e5)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Access Dashboard
        </button>
      </div>
    </div>
  );
}