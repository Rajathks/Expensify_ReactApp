import {
  AddExpenses,
  EditExpense,
  RemoveExpense,
  startAddExpense,
} from "../../actions/expenses";
import moment from "moment";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

const expenses = [
  {
    id: "1",
    description: "lGum",
    note: "sample note",
    amount: parseFloat("5000", 10) * 100,
    createDate: moment(0),
  },
  {
    id: "2",
    description: "Rent",
    note: "Rent note",
    amount: "8000",
    createDate: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Bill",
    note: "Bill note",
    amount: "9000",
    createDate: moment(0).add(5, "days").valueOf(),
  },
];

test("Test Remove Expense Action Generator", () => {
  const result = RemoveExpense({ id: "Raj123" });
  expect(result).toEqual({
    type: "REMOVEEXPENSE",
    id: "Raj123",
  });
});

test("Test Edit Expense Action Generator", () => {
  const result = EditExpense("Raj123", { amount: "5000" });
  expect(result).toEqual({
    type: "EDITEXPENSE",
    id: "Raj123",
    update: {
      amount: "5000",
    },
  });
});

test("Add Expense Data Handler", () => {
  const result = AddExpenses(expenses[0]);
  expect(result).toEqual({
    type: "ADDEXPENSES",
    expense: expenses[0],
  });
});

//test('Default Data for Add Expense Handler' , () => {
//\\  let defaultdata = {
//    description : "",
//notes : "",
//amount : 100,
//createDate : 0

//}
//     const result = AddExpenses();
//     expect(result).toEqual({
//     type: 'ADDEXPENSES',
//     expense : {
//         ...defaultdata,
//         id:expect.any(String)
//     }

//     });
// });

test("Add Expense to database and store with correct value", (done) => {
  const store = createMockStore({});
  const edata = {
    description: "mouse",
    amount: 3000,
    notes: "this one is better ",
    createDate: 1000,
  };
  store
    .dispatch(startAddExpense(edata))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADDEXPENSES",
        expense: {
          id: expect.any(String),
          ...edata,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(edata);
      done();
    });
});

test("Add Expense to database and store with default value", (done) => {

    const store = createMockStore({});
    const edata = {
        description : "",
        notes : "",
        amount : 100,
        createDate : 0
    };
    store
      .dispatch(startAddExpense({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "ADDEXPENSES",
          expense: {
            id: expect.any(String),
            ...edata,
          },
        });
  
        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(edata);
        done();
      });

});
