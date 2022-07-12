import React from 'react'

const Home = () => {
  return (
    <div>
        <div style={{width:'100%', height:'70px', display:'flex',alignItems:'center',justifyContent:'space-between', backgroundColor:"#ffffff",borderBottom:'0.5px solid gray'}}>
            <div style={{marginLeft:'5%'}}>
                <h2>Today's Schedule</h2>
            </div>
            <div style={{marginRight:'5%', display:'flex',gap:'10px'}}> 
                <button style={{padding:'7px', backgroundColor:'black',color:'#FFFFFF',fontWeight:'bold',borderRadius:'7px'}}>BOOKMARKS</button>
                <button  style={{padding:'7px', backgroundColor:'black',color:'#FFFFFF',fontWeight:'bold',borderRadius:'7px'}}>REFER & EARN</button>
            </div>
        </div>
    </div>
  )
}

export default Home