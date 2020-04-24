import { v4 as uuidv4 } from "uuid";


export const AddExpenses = ({
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
  
  
  
  export const RemoveExpense = ({ id } = {}) => ({
    type: "REMOVEEXPENSE",
    id,
  });
  
  export const EditExpense = (id, update) => ({
    type: "EDITEXPENSE",
    id,
    update,
  });
  