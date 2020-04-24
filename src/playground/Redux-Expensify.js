import { combineReducers, createStore } from "redux";
import { v4 as uuidv4 } from "uuid";


// Store Creation and Combining Expensify and Filter stores



const AddExpenses = ({
  description = "",
  notes = "",
  amount = 100,
  createDate = 0,
} = {}) => ({
  type: "ADDEXPENSES",
  expense: {
    id: uuidv4(),
    description,
    notes,
    amount,
    createDate,
  },
});



const RemoveExpense = ({ id } = {}) => ({
  type: "REMOVEEXPENSE",
  id,
});

const EditExpense = (id, update) => ({
  type: "EDITEXPENSE",
  id,
  update,
});

const SearchText = (text = "") => ({
  type: "SEARCHTEXT",
  text,
});

const SortByDate = () => ({
  type: "SORTDATE",
});

const SortByAmount = () => ({
  type: "SORTAMOUNT",
});

const StartDateChanger = (startDate) => ({
  type: "SETSTART",
  startDate,
});

const EndDateChanger = (endDate) => ({
  type: "SETEND",
  endDate,
});


const item1 = store.dispatch(
    AddExpenses({ description: "For Infosys Stock", amount: 500 ,createDate:5000})
  );
  const item2 = store.dispatch(
    AddExpenses({ description: "For Lupin Stock", amount: 600 })
  );
  const item3 = store.dispatch(
    AddExpenses({ description: "For ITC Stock", amount: 39200 , createDate:3000 ,endDate:6000 })
  );
//store.dispatch(RemoveExpense({ id: item2.expense.id }));
store.dispatch(EditExpense(item1.expense.id, { amount: 1000 }));
store.dispatch(
  EditExpense(item1.expense.id, { amount: 7000, description: "Infy Stock" })
);


store.dispatch(SortByDate());
store.dispatch(SortByAmount());
//store.dispatch(SearchText("Infy"));

store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
  });

store.dispatch(StartDateChanger(100));
store.dispatch(EndDateChanger(10000));

