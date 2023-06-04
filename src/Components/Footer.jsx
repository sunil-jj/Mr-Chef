import React from 'react';

import { MdFacebook } from 'react-icons/md';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer' style={{backgroundColor : "grey", color : "white" }}>

        <div className='upper' 
        style={{display : "flex", justifyContent : "space-around", paddingBottom : "20px"}}>

            <div style={{display : "flex", justifyContent : "space-around", marginLeft : "-20px"}}>
            <p style={{padding : "20px"}}>Disclaimer</p>
            <p style={{padding : "20px"}}>Privacy Policy</p>
            <p style={{padding : "20px"}}>FAQ</p>
            <p style={{padding : "20px"}}>Terms & Conditions</p>
            <p style={{padding : "20px"}}>Feedback</p>
            </div>

            <div style={{paddingTop : "20px"}}>
                <div>
                    <p>Follow Us</p>
                </div>
                <div style={{display : "flex", justifyContent : "space-between"}}>
                    <MdFacebook size={42}/>
                    <CiTwitter size={42}/>
                    <FaInstagramSquare size={42}/>
                    <AiOutlineYoutube size={42}/>
                </div>
            </div>

            <div style={{paddingTop : "20px"}}>
                <p >Download App</p>
                <img style={{width : "150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcx8sRXXQmSlzJSrNHCefb7yHRWl2BPBTuTA&usqp=CAU" alt="##" />
            </div>
        </div>

        <hr/>

        <div className='lower'
        style={{display : "flex", justifyContent : "center"}}>
            <p>All Rights Reserved. Copyright Jubilant FoodWorks Ltd.</p>
        </div> 

    </div>
  )
}

export default Footer
