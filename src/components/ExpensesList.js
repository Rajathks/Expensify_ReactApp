import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import GetVisibleExpenses from "../selectors/expenses";
import getVisibleExpenses from "../selectors/expenses";

export const ExpensesList = (props) => {
  return (
    <div>
      <h2> Here is your Expense List</h2>

      {props.expenses.map((expense) => {
        return <ExpenseListItem {...expense} key={expense.id}/>;
      })}
     
    </div>
  );
};

const mapStatetoProp = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses,state.filters)
  };
};

export default connect(mapStatetoProp)(ExpensesList);
