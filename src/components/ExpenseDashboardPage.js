import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";


const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter/>
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;