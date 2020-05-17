import React from "react";
import { connect } from "react-redux";
import {
  SearchText,
  SortByDate,
  SortByAmount,
  StartDateChanger,
  EndDateChanger,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";

export class ExpenseListFilter extends React.Component {
  state = {
    calenderFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    // console.log("Here");

    this.props.StartDateChanger(startDate);
    this.props.EndDateChanger(endDate);
  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };

  onTextChange = (e) => {
    this.props.SearchText(e.target.value);
  };

  onSortChange = (e) => {
    e.target.value === "amount"
      ? this.props.SortByAmount()
      : this.props.SortByDate();
  };

  render() {
    return (
      <div className="content-container">

        <div className="input-group">
          <div className="input-group__item">
            <input
            
              type="text"
              className ="text-input"
              placeholder="Search Expense"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            /> 
          </div>
          <div className="input-group__item">
            <select className="select" onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              startDateId="start"
              endDateId="end"
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    StartDateChanger: (startDate) => dispatch(StartDateChanger(startDate)),
    EndDateChanger: (endDate) => dispatch(EndDateChanger(endDate)),
    SearchText: (text) => dispatch(SearchText(text)),
    SortByAmount: () => dispatch(SortByAmount()),
    SortByDate: () => dispatch(SortByDate()),
  };
};

const mapStatetofilter = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStatetofilter, mapDispatchtoProps)(ExpenseListFilter);
