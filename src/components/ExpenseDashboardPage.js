import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesSummary from "../components/ExpensesSummary";


const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilter/>
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;