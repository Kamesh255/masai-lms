import React from 'react'

const Login = () => {
  return (
    <div style={{height:'100vh'}}>
        <div style={{margin:'100px auto',height:'400px', maxWidth:'500px',backgroundColor:'#FFFFFF', borderRadius:'5px', display:'grid',gridTemplateRows:'20% 80%' ,alignItems:'center'}}>
            <div style={{margin:'auto'}}>
            <img style={{width:'130px'}} src="masai_logo.jpg" alt="" />
            </div> 
            <div style={{display:'grid',gap:"10px",textAlign:'left',marginLeft:'10%',}}>
                <p>Email</p>
                <input style={{maxWidth:'350px',height:'40px', borderRadius:'5px'}} type="text" placeholder='Enter your email / username '  />
               <p>Password</p>
                <input style={{maxWidth:'350px',height:'40px', borderRadius:'5px'}} type='password' placeholder='Enter your password'/>
                <p style={{marginLeft:'55px'}}>Forgat your password</p>
                <button style={{width:'fit-content', backgroundColor:'black', color:'#ffffff', padding:'3px', borderRadius:'5px', fontWeight:'500',position:'relative',left:"60%",top:'-35px'}}>LOG IN</button>
            </div>
        </div>
        <div>

        </div> 
    </div>
  )
}

export default Login

 