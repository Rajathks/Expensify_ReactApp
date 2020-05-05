import {createStore , combineReducers , applyMiddleware , compose}  from "redux";
import ExpensifyReducer from "../reducers/expenses";
import FilterReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
  
  export default () => {

    const store = createStore(
        combineReducers({
          expenses: ExpensifyReducer,
          filters: FilterReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
      );
      return store;

  }