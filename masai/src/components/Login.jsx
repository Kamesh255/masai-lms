import React from "react";

const Login = () => {
  return (
    <div style={{ height: "800px" }}>
      <div
        style={{
          margin: "80px auto",
          maxWidth: "500px",
          backgroundColor: "#FFFFFF",
          borderRadius: "5px",
          display: "grid",
          gridTemplateRows: "20% 80%",
          alignItems: "center",
          height: "700px",
        }}
      >
        <div style={{ margin: "auto" }}>
          <img style={{ width: "130px" }} src="masai_logo.jpg" alt="" />
        </div>

        <div
          style={{
            display: "grid",
            gap: "10px",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>Register User</h1>
          <p>Email</p>
          <input
            style={{ maxWidth: "350px", height: "40px", borderRadius: "5px",backgroundColor:'#E8F0FE' }}
            type="text"
            placeholder="Enter your email / username "
          />
          <p>Password</p>
          <input
            style={{ maxWidth: "350px", height: "40px", borderRadius: "5px",backgroundColor:'#E8F0FE' }}
            type="password"
            placeholder="Enter your password"
          />
          <button
            style={{
              width: "fit-content",
              backgroundColor: "black",
              color: "#ffffff",
              padding: "3px",
              borderRadius: "5px",
              fontWeight: "500",
            }}
          >
            Register
          </button>
          <br />
          <hr />
          <br />
          <h1 style={{ fontWeight: "bold" }}>Log-in User</h1>
          <p>Email</p>
          <input
            style={{ maxWidth: "350px", height: "40px", borderRadius: "5px",backgroundColor:'#E8F0FE' }}
            type="text"
            placeholder="Enter your email / username "
          />
          <p>Password</p>
          <input
            style={{ maxWidth: "350px", height: "40px", borderRadius: "5px",backgroundColor:'#E8F0FE' }}
            type="password"
            placeholder="Enter your password"
          />
          <button
            style={{
              width: "fit-content",
              backgroundColor: "black",
              color: "#ffffff",
              padding: "3px",
              borderRadius: "5px",
              fontWeight: "500",
            }}
          >
            LOG IN
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Login;
