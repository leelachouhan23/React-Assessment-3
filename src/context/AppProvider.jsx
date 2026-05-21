// context/AppProvider.js

import { useReducer } from "react";

import {
  authReducer,
  authInitialState,
} from "../reducers/authReducer";

import {
  expenseReducer,
  expenseInitialState,
} from "../reducers/expenseReducer";

import AuthStateContext from "./AuthStateContext";
import AuthDispatchContext from "./AuthDispatchContext";

import ExpenseStateContext from "./ExpenseStateContext";
import ExpenseDispatchContext from "./ExpenseDispatchContext";

export default function AppProvider({ children }) {
  const [authState, authDispatch] = useReducer(
    authReducer,
    authInitialState
  );

  const [expenseState, expenseDispatch] = useReducer(
    expenseReducer,
    expenseInitialState
  );

  return (
    <AuthStateContext.Provider value={authState}>
      <AuthDispatchContext.Provider value={authDispatch}>
        <ExpenseStateContext.Provider value={expenseState}>
          <ExpenseDispatchContext.Provider value={expenseDispatch}>
            {children}
          </ExpenseDispatchContext.Provider>
        </ExpenseStateContext.Provider>
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}