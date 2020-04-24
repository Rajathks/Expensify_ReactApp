import React from "react";
import ExpenseForm from "./ExpenseForm";
import { AddExpenses } from "../actions/expenses";
import { connect } from "react-redux";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.AddExpenses(expense);
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
    AddExpenses: (expense) => dispatch(AddExpenses(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
