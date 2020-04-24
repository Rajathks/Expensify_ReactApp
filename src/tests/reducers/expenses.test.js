import moment from "moment";
import ExpensifyReducer from "../../reducers/expenses";

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

test("Default values test case : ", () => {
    const result = ExpensifyReducer(undefined,{type:"@@INTIT"});
    expect(result).toEqual([]);
});

test(" Remove Expense with Matching ID test : ",() => {
    const result = ExpensifyReducer(expenses,{type:"REMOVEEXPENSE",id:"2"});
    expect(result).toEqual([expenses[0],expenses[2]]);
});

test("Remove Expense with no matching id test ",() => {
    const result = ExpensifyReducer(expenses,{type:"REMOVEEXPENSE",id:"5"});
    expect(result).toEqual(expenses);
});

test(" Edit expense with matching id test ",() => {
    const result = ExpensifyReducer(expenses,{type:"EDITEXPENSE",id:"1",update:{amount:"7000"}});
    expect(result[0].amount).toBe("7000");
});

test("edit expense with no matching id test ",() => {
    const result = ExpensifyReducer(expenses,{type:"EDITEXPENSE",id:"4",update:{amount:"7000"}});
    expect(result).toEqual(expenses);
});
test(" add expense test ",() => {
    const expense = 
    {
        id:"4",
        description:"TEST",
        note:"",
        createDate:moment(0),
        amount:"77777"
        
        


    };
    const action = {
        type : "ADDEXPENSES",
        expense
    };
    const result = ExpensifyReducer(expenses,action);
    expect(result).toEqual([...expenses,expense]);
});