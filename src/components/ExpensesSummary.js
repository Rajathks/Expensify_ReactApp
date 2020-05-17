import React from "react";
import {Link} from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import {connect} from "react-redux";
import numeral from "numeral";
import ExpensesTotal from "../selectors/Expenses-total";

export const ExpensesSummary = ({expenseCount , expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const fExpense = numeral(expenseTotal/100).format("$0,00,000");
    return (

        <div className="page-header">
            <div className="content-container">
            <p className="page-header__title"> There are a total of <span> {expenseCount} </span>{expenseWord} and the the total expenditure is :<span> {fExpense}</span>   </p>
           <div className="page-header__action">
           <Link className = "button" to="/create">Add Expense</Link>
               </div> 
            </div>
            
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