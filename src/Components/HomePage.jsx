
import React from 'react'
import {Link} from"react-router-dom"
import backimg from "./homePageImage/back.jpg"




function HomePage() {
  return (
    <div>  
    <div  className='banner'> 
    {/* style={{position:"relative"}} */}

       <img  style={{width:"100%"}} src={backimg} />
        <div style={{position:"absolute",top:"30px"}}>
          <div style={{marginLeft:"70px", paddingTop:"400px"}}> 
            <h2 style={{color:"white",fontWeight:"bold",fontSize:"65px"}} > Sizzlin' Stack</h2>
            <h2 style={{color:"orange",fontWeight:"bold",fontSize:"40px"}}  > Flame-grilled, Juicy Delight! </h2>
            <h3 style={{color:"coral",width:"58%",fontSize:"20px"}}> Our Sizzlin' Stack is a mouthwatering symphony of sizzling flavors, grilled to perfection. <span style={{fontWeight:"bold",color:"beige"}}> Mr.Chef </span> </h3>

          </div>
 

        </div>
        <div style={{display:"flex",width:"24%",border:"2px solid white",position:"absolute",top:"40%",backgroundColor:"white",height:"65px",borderRadius:"15px",marginLeft:"60px", marginTop: "300px"}} className='signupbox'> 
          <div style={{marginTop:"12px",color:"coral",fontFamily:"cursive",fontSize:"20px",padding:"5px"}}>-5%</div>
          <div style={{width:"60%",lineHeight:"15px",marginTop:"12px",fontSize:"16px",marginLeft:"10px",fontFamily:"cursive"}}> <p> on everything for registered users</p></div>
          <div style={{marginTop:"12px",borderRadius:"6px",marginLeft:"-20px"}} > <button style={{backgroundColor:"yellowgreen",padding:"5px",fontFamily:"cursive"}}> Sign up </button></div>

        </div>
    
    </div>
    </div>
  )
}

export default HomePage