import React from "react";
import GoogleLog from "./GoogleLog";

const Login = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          margin: "80px auto",
          maxWidth: "500px", 
          borderRadius: "5px",
          display: "grid",
          gridTemplateRows: "20% 80%",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <div style={{ margin: "auto" }}>
          <img style={{ width: "130px" }} src="masai_logo.png" alt="" />
        </div>
        <div style={{backgroundColor: "#FFFFFF",height:'100%'}}>
          <br />
          <GoogleLog  />
          <br />
          <h1 style={{ fontWeight: "400",position:'relative',left:'-30%' }}>Log-in with google</h1> 
          <br />
          <hr /> 
        </div>  
      </div>
    </div>
  );
};

export default Login;
