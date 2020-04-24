import getVisibleExpenses, { } from "../../selectors/expenses";
import moment from "moment";

const expenses = [
    {
        id:"1",
        description : "lGum",
        note:"sample note",
        amount : "5000",
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
test("Visble expenses by Filters:",() =>{
    const result = getVisibleExpenses(expenses,{
        text:"l",
        sortBy:"date",
        startDate: undefined,
        endDate:undefined
    });

    expect(result).toEqual([expenses[2],expenses[0]]);
});

test("Expenses filter by start date test:",() =>{
    let filters = {
        text:"l",
        sortBy:"date",
        startDate: moment(0),
        endDate:undefined

    }
    const result=getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test("Expenses filter by end date test:",() =>{
    let filters = {
        text:"",
        sortBy:"date",
        startDate: moment(0),
        endDate:moment(3)
    }
    const result=getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[0]]);
});

test("Expenses filter by end date test:",() =>{
    let filters = {
        text:"",
        sortBy:"date",
        startDate: undefined,
        endDate:undefined
    }
    const result=getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test("Expenses filter by end date test:",() =>{
    let filters = {
        text:"",
        sortBy:"amount",
        startDate: undefined,
        endDate:undefined
    }
    const result=getVisibleExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]]);
});