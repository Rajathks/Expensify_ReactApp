import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title"> Edit this Expense </h2>
          </div>
        </div>

        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button button--remove" onClick={this.onClick}>Remove Expense</button>
        </div>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  };
};

const mapStatetoProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(EditExpensePage);
