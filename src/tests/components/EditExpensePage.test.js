import React from "react";
import moment from "moment";
import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";

const expenses = [
  {
    id: "0",
    description: "lGum",
    note: "sample note",
    amount: parseFloat("5000", 10) * 100,
    createDate: moment(0),
  },
  {
    id: "1",
    description: "Rent",
    note: "Rent note",
    amount: "8000",
    createDate: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "2",
    description: "Bill",
    note: "Bill note",
    amount: "9000",
    createDate: moment(0).add(5, "days").valueOf(),
  },
];

let EditExpenseSpy, RemoveExpenseSpy, history, wrapper;

beforeEach(() => {
  EditExpenseSpy = jest.fn();
  RemoveExpenseSpy = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      EditExpense={EditExpenseSpy}
      RemoveExpense={RemoveExpenseSpy}
      history={history}
    />
  );
});
test("Edit Expense Render Test : ", () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(EditExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
});

test('should handle remove expense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(RemoveExpenseSpy).toHaveBeenLastCalledWith({id:expenses[0].id});
    
});
