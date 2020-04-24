


export const SearchText = (text = "") => ({
    type: "SEARCHTEXT",
    text,
  });
  
  export const SortByDate = () => ({
    type: "SORTDATE",
  });
  
 export  const SortByAmount = () => ({
    type: "SORTAMOUNT",
  });
  
 export const StartDateChanger = (startDate) => ({
    type: "SETSTART",
    startDate,
  });
  
export  const EndDateChanger = (endDate) => ({
    type: "SETEND",
    endDate,
  });
  