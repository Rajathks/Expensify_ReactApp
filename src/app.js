import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import "normalize.css/normalize.css";
import "./Styles/Style.scss";
import AppRoutes , {history} from "./routes/AppRoutes";
import { startSetExpenses } from "./actions/expenses";
import { login,logout } from "./actions/auth";
import getVisibleExpenses from "../src/selectors/expenses";
import "react-dates/lib/css/_datepicker.css";
import {firebase} from "./firebase/firebase";
import Loader from "./components/Loader.js";

const store = configureStore();
console.log("testt");

const JSX = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
); 

ReactDom.render(<Loader />, document.getElementById("app"));


let hasRendered = false;
const renderApp = () => {
  ReactDom.render(JSX, document.getElementById("app"));
  hasRendered = true;
}


firebase.auth().onAuthStateChanged((user) =>{
  if(user){
    console.log("login");
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === "/"){
        history.push("/dashboard");
      }
    });
    
  }else{
    console.log("logout");
    store.dispatch(logout());
    renderApp();
    history.push("/");
    
  }
});
