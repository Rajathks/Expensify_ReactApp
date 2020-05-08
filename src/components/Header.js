import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import {startLogout} from "../actions/auth";

export const Header = ({startLogout}) => (
  <div>
    <h1> Expensify React Application</h1>
    <div>
      <NavLink activeClassName="is-active" to="/Dashboard">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink activeClassName="is-active" to="create">
        {" "}
        Add Expense{" "}
      </NavLink>
      
      
    </div>
    <button onClick={startLogout}>Logout</button>
  </div>
);



const mapDispatchToProps = (dispatch) => {
  return {
    startLogout : () => dispatch(startLogout())
  }
}

export default connect(undefined,mapDispatchToProps)(Header);
