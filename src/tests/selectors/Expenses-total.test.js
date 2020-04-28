import getExpensesTotal from "../../selectors/Expenses-total";
import moment from "moment";


const expenses = [
    {
        id:"1",
        description : "lGum",
        note:"sample note",
        amount : 5000,
        createDate : moment(0)
    }, 
    {
        id:"2",
        description : "Rent",
        note:"Rent note",
        amount : 8000,
        createDate : moment(0).subtract(4,"days").valueOf()
    },
    {
        id:"3",
        description : "Bill",
        note:"Bill note",
        amount : 9000,
        createDate : moment(0).add(5,"days").valueOf()
    }
];


test("Amount Summer for all expenses", () => {
    let total = getExpensesTotal(expenses);
    expect(total).toBe(22000);
});

test("Amount Summer for single expense", () => {
    
    
    let total = getExpensesTotal([expenses[1]]);
    expect(total).toBe(8000);
});

test("Amount Summer for no expense", () => {
    
    
    let total = getExpensesTotal([]);
    expect(total).toBe(0);
});