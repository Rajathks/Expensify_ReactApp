import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ description, id, amount, createDate }) => (
  <Link className="list_item" to={`/edit/${id}`}>
    <div >
     <h3 className="list_item__title"> {description} </h3> 
      <span className="list_item__subtitle">{moment(createDate).format(" MMMM Do - YYYY")}</span>
    </div>
    <h3 className="list_item__amount">{numeral(amount / 100).format("$0,00,000")}</h3>
  </Link>
);

export default ExpenseListItem;
