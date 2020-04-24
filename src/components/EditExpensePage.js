import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { EditExpense } from "../actions/expenses";
import { RemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.EditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onClick = () => {
    this.props.RemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />

        <button onClick={this.onClick}>Remove Expense</button>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch,props) => {
    return {
        
        EditExpense: (id,expense) => dispatch(EditExpense(id,expense)),
        RemoveExpense : (data) => dispatch(RemoveExpense(data))
    };
}

const mapStatetoProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(EditExpensePage);
