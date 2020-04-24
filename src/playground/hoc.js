import React from "react";
import ReactDom from "react-dom";


const Info = (props) =>{
    return(
        <div>
            <h1> Info</h1>
            <p> The info is {props.info}</p>
        </div>
    );
}

const RequireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAuth && <p> Test HOC Componet</p>}
        <WrappedComponent {...props} />


    </div>

    );
       
  
}

const AuthInfo = RequireAuthentication(Info);

ReactDom.render(<AuthInfo isAuth={true} info="Test info"/>,document.getElementById("app"));