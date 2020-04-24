import {createStore , combineReducers}  from "redux";
import ExpensifyReducer from "../reducers/expenses";
import FilterReducer from "../reducers/filters";


  
  export default () => {

    const store = createStore(
        combineReducers({
          expenses: ExpensifyReducer,
          filters: FilterReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;

  }