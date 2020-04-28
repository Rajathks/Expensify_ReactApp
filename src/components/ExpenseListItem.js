import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

 const ExpenseListItem = ({ description, id, amount, createDate }) => (
  <div>
    <Link to={`/edit/${id}`}> 
      {" "}
      <h3> Description : {description}</h3>{" "}
    </Link>
    <p> Amount : {numeral(amount/100).format('$0,00,000')}</p>
    <p> Created on : {moment(createDate).format(" MMMM DO - YYYY")}</p>
  </div>
);


export default ExpenseListItem;
