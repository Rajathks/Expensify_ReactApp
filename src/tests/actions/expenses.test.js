import {
  AddExpenses,
  EditExpense,
  RemoveExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  startEditExpense,
  startRemoveExpense,
} from "../../actions/expenses";
import moment from "moment";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import database from "../../firebase/firebase";
import ExpensifyReducer from "../../reducers/expenses";

const createMockStore = configureMockStore([thunk]);
const uid = "ThisismyTestID";
const defaultAuthState = {
  auth: {
    uid
  }
};

const expenses = [
  {
    id: "1",
    description: "lGum",
    notes: "sample note",
    amount: parseFloat("5000", 10) * 100,
    createDate: 2000,
  },
  {
    id: "2",
    description: "Rent",
    notes: "Rent note",
    amount: "8000",
    createDate: 3000,
  },
  {
    id: "3",
    description: "Bill",
    notes: "Bill note",
    amount: "9000",
    createDate: -5000,
  },
];

beforeEach((done) => {
  const edata = {};
  expenses.forEach(({ id, description, notes, amount, createDate }) => {
    edata[id] = { description, notes, amount, createDate };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(edata)
    .then(() => done());
});

test("Test Remove Expense Action Generator", () => {
  const result = RemoveExpense({ id: "Raj123" });
  expect(result).toEqual({
    type: "REMOVEEXPENSE",
    id: "Raj123",
  });
});

test("Should remove data from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVEEXPENSE",
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test("Test update functionality on Firebase from Application", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const update = {
    amount: "6000",
  };
  store
    .dispatch(startEditExpense(id, update))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDITEXPENSE",
        id,
        update,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(update.amount);
      done();
    });
});

test("Add Expense Data Handler", () => {
  const result = AddExpenses(expenses[0]);
  expect(result).toEqual({
    type: "ADDEXPENSES",
    expense: expenses[0],
  });
});

test("Add Expense to database and store with correct value", (done) => {
  const store = createMockStore(defaultAuthState);
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(edata);
      done();
    });
});

test("Add Expense to database and store with default value", (done) => {
  const store = createMockStore(defaultAuthState);
  const edata = {
    description: "",
    notes: "",
    amount: 100,
    createDate: 0,
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(edata);
      done();
    });
});

test("Test should set up data with correct action type", () => {
  const actions = setExpenses(expenses);
  expect(actions).toEqual({
    type: "SETEXPENSES",
    expenses,
  });
});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SETEXPENSES",
    expenses,
  });
});

test("should fetch the expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SETEXPENSES",
      expenses,
    });
    done();
  });
});
