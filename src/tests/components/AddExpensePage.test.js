import React from "react";
import {shallow} from "enzyme";
import {AddExpensePage} from "../../components/AddExpensePage";
import moment from "moment";


const expenses = [
    {
        id:"1",
        description : "lGum",
        note:"sample note",
        amount : parseFloat("5000",10)*100,
        createDate : moment(0)
    }, 
    {
        id:"2",
        description : "Rent",
        note:"Rent note",
        amount : "8000",
        createDate : moment(0).subtract(4,"days").valueOf()
    },
    {
        id:"3",
        description : "Bill",
        note:"Bill note",
        amount : "9000",
        createDate : moment(0).add(5,"days").valueOf()
    }
];

let startAddExpense , history , wrapper;
beforeEach(() =>{
    startAddExpense = jest.fn();
     history = {push: jest.fn()};
     wrapper = shallow(<AddExpensePage startAddExpense = {startAddExpense} history = {history} />);
});
test("Should render add expense page correctly", () => {
    
    expect(wrapper).toMatchSnapshot();

});

test("Should render add expense page correctly", () => {
   
    wrapper.find("ExpenseForm").prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);

});