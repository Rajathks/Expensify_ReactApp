import {AddExpenses , EditExpense , RemoveExpense} from "../../actions/expenses";

test("Test Remove Expense Action Generator" , () => {
    const result = RemoveExpense({id:'Raj123'});
    expect(result).toEqual({
        type:'REMOVEEXPENSE',
        id:'Raj123'
    });

});

test("Test Edit Expense Action Generator" , () => {
    const result = EditExpense('Raj123',{amount:'5000'});
    expect(result).toEqual({
        type:'EDITEXPENSE',
        id:'Raj123',
        update:{
            amount:'5000'
        }
    });

});

test('Add Expense Data Handler', () =>{
    const expenseData = {
        description : 'Test Desc',
        amount : "500",
        createDate : "2000",
        notes : "Test note"
    }
    const result = AddExpenses(expenseData);
    expect(result).toEqual({
        type: "ADDEXPENSES",
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('Default Data for Add Expense Handler' , () => {
    let defaultdata = {
        description : "",
    notes : "",
    amount : 100,
    createDate : 0

    }
    const result = AddExpenses();
    expect(result).toEqual({
    type: 'ADDEXPENSES',
    expense : {
        ...defaultdata,
        id:expect.any(String)
    }
    
    });
});
