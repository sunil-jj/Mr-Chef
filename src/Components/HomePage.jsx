
import React from 'react'
import Navbar from './Navbar';





function HomePage() {
  return (
    <div> 
      <Navbar/>    
    <div style={{position:"relative",marginTop:"50px"}} className='banner'>

       <img  style={{width:"100%",height:"50%"}} src=" https://media.istockphoto.com/id/1301482898/photo/pepperoni-pizza-on-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=ULNbqiJ3sLVoKy3RwtBY6DuOPc0bXm8S87TnCmKPEfg=" />
        <div style={{position:"absolute",top:"30px"}}>
          <div style={{marginLeft:"270px"}}> 
            <h2 style={{color:"white",fontWeight:"bold",fontSize:"65px"}} > Pizza Pollo</h2>
            <h2 style={{color:"orange",fontWeight:"bold",fontSize:"40px"}}  > With Special cheese </h2>
            <h3 style={{color:"coral",width:"58%",fontSize:"20px"}}> Italian pizza pollo with special cheese is a flavour can find only in <span style={{fontWeight:"bold",color:"beige"}}> Mr.Chef </span> </h3>

          </div>
 

        </div>
        <div style={{display:"flex",width:"24%",border:"2px solid white",position:"absolute",top:"40%",backgroundColor:"white",height:"65px",borderRadius:"15px",marginLeft:"260px"}} className='signupbox'> 
          <div style={{marginTop:"12px",color:"coral",fontFamily:"cursive",fontSize:"20px",padding:"5px"}}>-5%</div>
          <div style={{width:"60%",lineHeight:"15px",marginTop:"12px",fontSize:"16px",marginLeft:"10px",fontFamily:"cursive"}}> <p> on everything for registered users</p></div>
          <div style={{marginTop:"12px",borderRadius:"6px",marginLeft:"-20px"}} > <button style={{backgroundColor:"yellowgreen",padding:"5px",fontFamily:"cursive"}}> Sign up </button></div>

        </div>
    
    </div>
    </div>
  )
}

export default HomePage