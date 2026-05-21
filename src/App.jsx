// App.jsx

import { useContext } from "react";

import AuthStateContext from "./context/AuthStateContext";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const authState = useContext(AuthStateContext);

  return authState.isAuthenticated
    ? <Dashboard />
    : <Login />;
}