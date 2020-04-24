import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./stores/configureStore";
import "normalize.css/normalize.css";
import "./Styles/Style.scss";
import AppRoutes from "./routes/AppRoutes";
import { AddExpenses } from "./actions/expenses";
import { SearchText } from "./actions/filters";
import getVisibleExpenses from "../src/selectors/expenses"
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();

store.dispatch(AddExpenses({description:"Water Bill",amount:"500" ,createDate:"2500"}));
store.dispatch(AddExpenses({description:"Electricity Bill",amount:"2300",createDate:"3000"}));
store.dispatch(AddExpenses({description:"Paper Bill",amount:"4300",createDate:"2000"}));

store.dispatch(SearchText("Electricity"));

const state =store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);



const JSX = (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
);


ReactDom.render(JSX, document.getElementById("app"));
