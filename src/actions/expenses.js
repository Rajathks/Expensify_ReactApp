import { v4 as uuidv4 } from "uuid";
import database from "../firebase/firebase";


export const AddExpenses = (expense) => ({
  type: "ADDEXPENSES",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      notes = "",
      amount = 100,
      createDate = 0,
    } = expenseData;

    const expense = { description, notes, amount, createDate };

    return database
      .ref(`users/${uid}/expenses`)
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

export const startRemoveExpense = ({id}) => {
  //console.log(id);
  const refid = id;
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/expenses/${refid}`).remove().then(() =>{
    dispatch(RemoveExpense({id}));
    }).catch((e) => console.log(e))
  };
};




export const EditExpense = (id, update) => ({
  type: "EDITEXPENSE",
  id,
  update,
});


export const startEditExpense = (id, update) => {

  return (dispatch,getState) => {
    const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).update({
        ...update
      }).then(() => {
        dispatch(EditExpense(id,update));
      }).catch((e) => console.log(e))
  };

};


export const setExpenses = (expenses) => ({
  type: "SETEXPENSES",
  expenses
});



export const startSetExpenses = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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

   

