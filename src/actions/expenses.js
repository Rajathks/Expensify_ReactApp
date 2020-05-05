import { v4 as uuidv4 } from "uuid";
import database from "../firebase/firebase";
export const AddExpenses = (expense) => ({
  type: "ADDEXPENSES",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      notes = "",
      amount = 100,
      createDate = 0,
    } = expenseData;

    const expense = { description, notes, amount, createDate };

    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          AddExpenses({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

export const RemoveExpense = ({ id } = {}) => ({
  type: "REMOVEEXPENSE",
  id,
});

export const EditExpense = (id, update) => ({
  type: "EDITEXPENSE",
  id,
  update,
});

export const setExpenses = (expenses) => ({
  type: "SETEXPENSES",
  expenses
});



export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
  
      dispatch(setExpenses(expenses));
    });
  };
};

   

