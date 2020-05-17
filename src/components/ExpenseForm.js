import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import "react-dates/initialize";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      notes: props.expense ? props.expense.notes : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createDate: props.expense ? moment(props.expense.createDate) : moment(),
      CalenderFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description,
      };
    });
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return {
        notes: note,
      };
    });
    //console.log("Note Call",note);
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount: amount,
        };
      });
    }
  };

  onDateChange = (createDate) => {
    if (createDate) {
      this.setState(() => ({ createDate }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ CalenderFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return {
          error: "please add description and amount values",
        };
      });
    } else {
      this.setState(() => {
        return {
          error: "",
        };
      });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createDate: this.state.createDate.valueOf(),
        notes: this.state.notes,
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className ="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Add Description"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          type="text"
          placeholder="Add Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createDate}
          onDateChange={this.onDateChange}
          focused={this.state.CalenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add Optional Note"
          className="textarea"
          value={this.state.notes}
          onChange={this.onNoteChange}
        ></textarea>
        <div>
        <button className="button">Add Expense</button>
        </div>
       
      </form>
    );
  }
}

export default ExpenseForm;
