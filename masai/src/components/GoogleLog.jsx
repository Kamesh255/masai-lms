import React from "react";
import { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GoogleLog = () => {
    
  const clientId ="1024591768582-1ks7s33nckkkv9k0hcro9qgmadu8q2md.apps.googleusercontent.com";

  const [loginBtn, setLoginBtn] = useState(true);
  const [logOutBtn, setLogOutBtn] = useState(false);
  const [data, setData] = useState([])
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setData(res.profileObj)
    setLoginBtn(false);
    setLogOutBtn(true);
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failed:", res);
  };
  const onSignoutSuccess = () => {
    alert("You have been signed out successfully");
    setLoginBtn(true);
    setLogOutBtn(false);
    console.clear();
  };

  return (
    <div>
        {logOutBtn ? (
        <div> 
            <div style={{width:'100px',height:'100px', backgroundColor:'purple',color:'white',borderRadius:"100%",margin:"auto",display:'flex',alignItems:'center',justifyContent:'center'}}>{data.givenName}</div>
             <p style={{fontWeight:'bold'}}>{data.name}</p>
             <p style={{fontWeight:'500'}}>{`(${data.email})`}</p>
        </div>
         ) : null}
      {loginBtn ? (
        <GoogleLogin style={{width:'200px'}}
     
          clientId={clientId}
          buttonText="Login"
         
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {logOutBtn ? (
        <GoogleLogout style={{width:'200px'}} 
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
};

export default GoogleLog;
