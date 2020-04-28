import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1> Expensify React Application</h1>
    <div>
      <NavLink activeClassName="is-active" exact={true} to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink activeClassName="is-active" to="create">
        {" "}
        Add Expense{" "}
      </NavLink>
      
    </div>
  </div>
);

export default Header;
