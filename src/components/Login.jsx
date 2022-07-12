import React from 'react'

const Login = () => {
  return (
    <div style={{height:'100vh'}}>
        <div style={{margin:'150px ' ,display:'flex',flexDirection:'row'}}>
            <div>
            <img style={{width:'100px'}} src="masai_logo.jpg" alt="" />
            </div>
            <br />
            <div>
                <input type="text" placeholder='Enter your email / username '  />
                <input type='password' placeholder='Enter your password'/>
            </div>
        </div>
        
    </div>
  )
}

export default Login