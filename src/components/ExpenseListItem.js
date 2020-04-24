import React from "react";
import { Link } from "react-router-dom";

 const ExpenseListItem = ({ description, id, amount, createDate }) => (
  <div>
    <Link to={`/edit/${id}`}>
      {" "}
      <h3> Description : {description}</h3>{" "}
    </Link>
    <p> Amount : {amount}</p>
    <p> Created on : {createDate}</p>
  </div>
);


export default ExpenseListItem;
