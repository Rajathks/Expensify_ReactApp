import React from "react";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };


  render() {
      return (
        <div>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
      );
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
