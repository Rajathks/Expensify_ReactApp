import moment from "moment";


const fReducerDefault = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  


//Reducer to Handler Filter Features
const FilterReducer = (state = fReducerDefault, action) => {
    switch (action.type) {
      case "SEARCHTEXT":
        return {
          ...state,
          text: action.text,
        };
  
      case "SORTDATE":
        return {
          ...state,
          sortBy: "date",
        };
      case "SORTAMOUNT":
        return {
          ...state,
          sortBy: "amount",
        };
      case "SETSTART":
        return {
          ...state,
          startDate: action.startDate,
        };
      case "SETEND":
        return {
          ...state,
          endDate: action.endDate,
        };
  
      default: {
        return state;
      }
    }
  };
  
  export default FilterReducer;