import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import "normalize.css/normalize.css";
import "./Styles/Style.scss";
import AppRoutes from "./routes/AppRoutes";
import { AddExpenses } from "./actions/expenses";
import { SearchText } from "./actions/filters";
import getVisibleExpenses from "../src/selectors/expenses";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

const store = configureStore();
console.log("testt");

const JSX = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDom.render(JSX, document.getElementById("app"));
