import moment from "moment";

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createDateMoment = moment(expense.createDate);
     // console.log(startDate);

      //console.log(createDateMoment);

      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createDateMoment, "day")
        : true;

      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createDateMoment, "day")
        : true;

      const searchText = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && searchText;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createDate < b.createDate ? 1 : -1;
      } else if (sortBy == "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
