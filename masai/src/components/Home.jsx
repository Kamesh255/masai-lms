import React from 'react'

const lectures=[
  {
    lecture_title: "HTML 2",
    lecture_teacher: "Nrupul",
    lecture_type: "Coading",
    video_type: "Live", 
    lecture_time:"1:00 PM"
  },
  {
    lecture_title: "Scrum",
    lecture_teacher: "Sibin O",
    lecture_type: "Scrum",
    video_type: "Live", 
    lecture_time:"9:00 AM"
  },
   
]

const Home = () => {
  const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;  
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd +"-" + mm + "-" + yyyy;
console.log(formattedToday)
  return (
    <div>
        <div style={{width:'100%', minHeight:'70px', display:'flex',alignItems:'center',justifyContent:'space-between', backgroundColor:"#ffffff",borderBottom:'1px solid rgb(181, 181, 181)'}}>
            <div style={{marginLeft:'5%'}}>
                <h1 style={{fontWeight:'500',fontSize:'23px'}}>Today's Schedule</h1>
            </div>
            <div style={{marginRight:'5%', display:'flex',gap:'10px'}}>  
                <button style={{padding:'7px', backgroundColor:'black',color:'#FFFFFF',fontWeight:'bold',borderRadius:'7px'}} >BOOKMARKS</button>
                <button style={{padding:'7px', backgroundColor:'black',color:'#FFFFFF',fontWeight:'bold',borderRadius:'7px'}}>REFER & EARN</button>
            </div>
        </div>
         <div style={{maxWidth:'80%', margin:'50px auto'}} >
          {lectures.map((el)=>{
            return(
              <div style={{backgroundColor:'#ffffff',Width:'80%',height:'100px',border:'1px solid #E5E7EB',display:'flex',gap:'5px',alignItems:'center',justifyContent:'space-between'}}> 
                  <div style={{marginLeft:'15px',textAlign:'left'}} >
                    <div style={{display:'flex',alignItems:'center',gap:'10px'}}> 
                      <div>
                        <div style={{backgroundColor:'#4F46E5',padding:' 15px 10px',borderRadius:'5px'}}>
                            <p style={{fontWeight:'700',color:'white'}}>{el.lecture_time}</p>
                            <p style={{fontWeight:'700',color:'white'}}>LECTURE</p>
                        </div>
                      </div>
                      <div> 
                        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                          <p style={{fontSize:'22px', color:'#4F46E5',fontWeight:'500'}}>{`${el.lecture_title} - ${formattedToday}`}</p> 
                        </div>
                        <div>
                          <p ><span style={{fontWeight:'500'}}>{el.lecture_teacher}</span> Starting at {el.lecture_time} </p>
                          <div style={{display:'flex',alignItems:'center',gap:'10px'}}> 
                            <div style={{backgroundColor:'#DBEAFE',padding:'0 5px',borderRadius:'5px'}}>{el.lecture_type}</div>
                            <div style={{backgroundColor:'#DCFCE7',padding:'0 5px',borderRadius:'5px'}}>{el.video_type}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{marginRight:'15px'}}>
                    <button>Details </button>
                  </div>
              </div> 
            )
          })}
        </div>
    </div>
  )
}

export default Home