import React from 'react'

const Lecture_upload = () => {
  return (
    <div style={{height:'100vh'}}>
    <div className='upload'>
        <p style={{fontWeight:'bold',marginTop:'10px'}}>Upload Lecture</p>
        <hr />
        <input type="text" placeholder='Enter Assignment' />
        <input type="text" placeholder='Enter Instructor Name ' />
        <input type="text" placeholder='Assignment Type'/>
        <input type="text" placeholder='Video Type'/>
        <input type="date" placeholder='Date'/>
        <input type="time" placeholder='Time'/>
        <br />
    </div>
</div>
  )
}

export default Lecture_upload