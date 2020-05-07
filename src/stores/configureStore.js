import {createStore , combineReducers , applyMiddleware , compose}  from "redux";
import thunk from "redux-thunk";
import AuthReducer from "../reducers/auth";
import ExpensifyReducer from "../reducers/expenses";
import FilterReducer from "../reducers/filters";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
  
  export default () => {

    const store = createStore(
        combineReducers({
          expenses: ExpensifyReducer,
          filters: FilterReducer,
          auth : AuthReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
      );
      return store;

  }