import React from "react";
import moment from "moment";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import { shallow } from "enzyme";

const filters = {
  text: "",
  sortByDate: "date",
  startDate: undefined,
  endDate: undefined,
};

const altfilters = {
  text: "bills",
  sortByDate: "amount",
  startDate: moment(0),
  endDate: moment(0).add(5, "days"),
};

let SearchText,
  SortByAmount,
  SortByDate,
  StartDateChanger,
  EndDateChanger,
  wrapper;
beforeEach(() => {
  SearchText = jest.fn();
  SortByAmount = jest.fn();
  SortByDate = jest.fn();
  StartDateChanger = jest.fn();
  EndDateChanger = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      filters={filters}
      SearchText={SearchText}
      SortByAmount={SortByAmount}
      SortByDate={SortByDate}
      StartDateChanger={StartDateChanger}
      EndDateChanger={EndDateChanger}
    />
  );
});

test("Expense List Filter Component Render Test : ", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Expense List filter component test with data : ", () => {
  wrapper.setProps({
    filters: altfilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("Should handle text change : ", () => {
  let value = "water";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(SearchText).toHaveBeenLastCalledWith(value);
});

test("Should sort by Date:", () => {
  let value = "date";
  wrapper.setProps({
    filters: altfilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(SortByDate).toHaveBeenCalled();
});

test("Should sort by amount:", () => {
  let value = "amount";

  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(SortByAmount).toHaveBeenCalled();
});

test("Should handle date change:", () => {
  let startDate = moment(0).add(4, "years");
  let endDate = moment(0).add(8, "years");
  

  wrapper.find('withStyles(DateRangePicker)').prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(StartDateChanger).toHaveBeenLastCalledWith(startDate);
  expect(EndDateChanger).toHaveBeenLastCalledWith(endDate);
});

test("Should handle date focus changes : ", () => {
    const calenderFocused = 'enddate';
    wrapper.find('withStyles(DateRangePicker)').prop("onFocusChange")(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);

});
