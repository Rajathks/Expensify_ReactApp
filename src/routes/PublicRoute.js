import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  
  <Route
    {...rest}
    component={(props) => {
      return (
        
            isAuthenticated ?
            <div>
<Redirect to="/Dashboard" />
             
            </div>
           
             : 
             <Component {...props} /> 
          
      );
      
    }}
  />
);

const mapStateToProps = (state) => {
 // console.log(state);

  return {
    isAuthenticated: !!state.auth.uid,
  };
};

export default connect(mapStateToProps)(PublicRoute);
