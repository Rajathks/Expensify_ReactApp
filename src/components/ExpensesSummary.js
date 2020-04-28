import React from "react";

import getVisibleExpenses from "../selectors/expenses";
import {connect} from "react-redux";
import numeral from "numeral";
import ExpensesTotal from "../selectors/Expenses-total";

export const ExpensesSummary = ({expenseCount , expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const fExpense = numeral(expenseTotal/100).format("$0,00,000");
    return (
        <div>
            <p> There are a total of {expenseCount} {expenseWord} and the the total expenditure is : {fExpense}  </p>
        </div>
    );
}

const mapStatetoProps = (state) => {
const visibleExpense = getVisibleExpenses(state.expenses,state.filters);
return {
    expenseCount : visibleExpense.length,
    expenseTotal : ExpensesTotal(visibleExpense)
}
}

export default connect(mapStatetoProps)(ExpensesSummary);