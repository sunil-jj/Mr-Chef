import React from 'react';
import { Box, Flex, Spacer, ChakraProvider,extendTheme,Image, Button, border } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from "react-icons/bs";
import logo from "./Signin_Signup/images/w.png"
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';





const Navbar = () => {
const [name, setName] = useState(false)
  const userName = useSelector((store)=>{
    return store.reducerReducer.userDetails.name
  })
  console.log(userName)
  useEffect(()=>{
   setName(true)
  },[])
  return (
    <div style={{width:"100%",height:"95px", position:"relative"}} >
      
      <div style={{width:"150px", height:"100px", position:"absolute"}}   className='Image'>
  <Link to="/"><img  style={{width:"90%",marginTop:"-20px",marginLeft:"18px"}} src={logo} alt="Description of the image"/></Link>
  
</div>

      <div  style={{marginTop:"25px",display:"flex", marginLeft:"500px", position:'absolute'}} className='menuaboutcontact'>

     
      
         <div style={{marginRight:"40px"}}> 
         <Link to="/menu">  
        <button >Menu</button>
        </Link>
        </div>
       
        <div style={{marginRight:"30px"}}>   
        <Link to="/about"> 
         <button> About Us </button>
        </Link>
        </div>
        <div> 
        <Link to="contact"> 
         <button> Contact Us </button>
        </Link>
        </div>

      </div>

      <div style={{display:"flex", paddingTop:"40px"}} className='imagesicon'>
        <div>
          <img style={{width:"8%",marginLeft:"176%",marginTop:"-28px",borderRadius:"10px"}} src="https://cdn-icons-png.flaticon.com/512/124/124010.png  " />
        </div>

        <div>
          <img  style={{width:"19%",marginLeft:"200%",marginTop:"-28px",borderRadius:"10px"}}  src=" data:image/jpeg;base64,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 " />
        </div>
        
          
        
      </div>

      <div style={{display:"flex", justifyContent:"end", marginRight:"150px"}}>
        {/* <button style={{marginTop:"-60px",borderRadius:"10px",marginLeft:"80%",background:"yellow", padding:"12px",borderRadius:"10px"}}> Login </button> */}
        <Link to="/signup">
        <Button isDisabled={name} mt="-70px" size='lg'  colorScheme='yellow' variant='solid'>
    Login
  </Button>
  {
   name ? <div>Hi {userName}</div> : <div></div>
  }
  </Link>
     <Link to="cart"> <BsCartPlusFill style={{marginLeft:"40px", fontSize:"40px", marginTop:"-43px", cursor:"pointer"}}/></Link>
      </div>

    </div>
    
             
    
  )
};

export default Navbar;