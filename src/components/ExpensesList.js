import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import GetVisibleExpenses from "../selectors/expenses";
import getVisibleExpenses from "../selectors/expenses";

export const ExpensesList = (props) => {
  return (
    <div className ="content-container">
      <div className="list_header">
        <div className="mobile_view">Expenses</div>
        <div className="desktop_view">Expense</div>
        <div className="desktop_view">Amount</div>
      </div>
     
     <div className="list-body">
      {props.expenses.map((expense) => {
        return <ExpenseListItem {...expense} key={expense.id}/>;
      })}
      </div> 
     
    </div>
  );
};

const mapStatetoProp = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses,state.filters)
  };
};

export default connect(mapStatetoProp)(ExpensesList);
