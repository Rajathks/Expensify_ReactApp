const eReducerDefault = [];

// Reducer to handle Expensify Features
const ExpensifyReducer = (state = eReducerDefault, action) => {
  switch (action.type) {
    case "ADDEXPENSES":
      return [...state, action.expense];
    case "REMOVEEXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });

    case "EDITEXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update,
          };
        }
        return expense;
      });
    default: {
      return state;
    }
  }
};

export default ExpensifyReducer;
