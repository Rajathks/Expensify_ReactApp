import React from "react";
import {shallow} from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
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



test("Expense Form Component Test: " , () => { 
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();  
});

test("Should render expense form with data : ", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test("Render Error when form is submitted incorrrectly : ", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault: () => { }

    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change : ", () =>{
    const wrapper = shallow(<ExpenseForm />);
    let value =  "New Description";
    wrapper.find('input').at(0).simulate("change",{
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);

});

test("Should set note on text area change : ", () =>{
    const wrapper = shallow(<ExpenseForm />);
    let value =  "New Note";
    wrapper.find('textarea').simulate('change',{
        target : {value}
    });
    expect(wrapper.state('notes')).toBe(value);

});


test("Should set state to new amount on change : ", () =>{
    const wrapper = shallow(<ExpenseForm />);
    let value =  "12.55";
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('amount')).toBe(value);

});

test("Should not set state to wrong amount format : ", () =>{
    const wrapper = shallow(<ExpenseForm />);
    let value =  "12.567";
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('amount')).toBe("");

});

test("Should call onSubmit prop for valid form submission ", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault :() => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount : expenses[0].amount,
        notes:expenses[0].notes,
        createDate:expenses[0].createDate.valueOf()
    })
});

test("Should set new date on change : ", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#date').prop('onDateChange')(now);
    expect(wrapper.state('createDate')).toEqual(now);
});


test("Should set calendar focus on change : ", () => {
   const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#date').prop('onFocusChange')({focused});
    expect(wrapper.state('CalenderFocused')).toBe(focused);
});