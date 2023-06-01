import React from 'react'
import { Input,Box,Center,Text,Checkbox,Flex,Spacer,Stack,Textarea, Button,Image} from '@chakra-ui/react'
import styles from "./checkout.module.css";
import { useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Loading from './loading';
import Successfullpage from './successfullpage';
import { useToast } from '@chakra-ui/react';


import OTPInput from "otp-input-react"

function Checkout() {
  const [creditCard,setcreditcard]=useState({state:"none",
 cardNo:"",
cvv:"",
date:""});
const[otp,setotp]=useState("");
const [checkoutpage,setcheckpage]=useState("block")
const [otppage,setotppage]=useState("none")
// const [xyz,setxyz]=useState("");
const [genotp,setgenotp]=useState(0);
const [isload,setisLoad]=useState(false);
const [paybtn,setpaybtn]=useState(true)
const [successfull,setsuccessfull]=useState(false)
const toast=useToast();
const toast2=useToast();
  let checkotp=()=>{
    if(genotp==otp){
            setcheckpage("none");
            setotppage("none");
            setisLoad(true)
           
            
            


            let timeout;

            function myFunction() {
              timeout = setTimeout(alertFunc, 5000);
             
            }
            
            function alertFunc() {
              setisLoad(false)
              setsuccessfull(true)


              function myFunction2() {
                timeout = setTimeout(alertFunc2, 3000);
               
              }
              function alertFunc2() {
                setsuccessfull(false)
                // navigate to home//
              }
              myFunction2()
              
            }
            myFunction();








           
    }  else{
      toast({
        position: 'top',
        title: 'Invalid OTP.',
        description: "Invalid OTP",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      setotp("")
      } }
  
  let handleClick=()=>{
    if(creditCard.cardNo==""||creditCard.date==""||creditCard.cvv==""){
      
      
    
    }else{
    let num=Math.floor(Math.random()*10000)
    setpaybtn(false)
  setgenotp(num)

  toast({
    position: 'top',
    title: '',
    description: `Your OTP Is ${num}`,
    status: 'success',
    duration: 3000,
    isClosable: true,
  })
  // alert("OTP Is "+ num)
  console.log(num)

    console.log(otp)
  setcheckpage("none")
  setotppage ("block")
  
    }
  }
let handlecrbtn=()=>{
  setpaybtn(false)
  {creditCard.state=="none"? setcreditcard({...creditCard,state:"block"}):setcreditcard({...creditCard,state:"none"})}

}
  

 let handlecashbtn=()=>{
  setcreditcard({...creditCard,state:"none"})
  setpaybtn(false)
  
 }
 
  return (
       <Box height="900px"  >
      <Box display={checkoutpage}>
       
      <Center>
      <Stack>
      <Box w="500px"> <Text fontSize="25px" fontWeight="extrabold" fontFamily="cursive" align="right">Checkout</Text></Box>
      <Box w="500px" height="600px" align="left" padding="15px" borderWidth='2px'backgroundColor="white" borderRadius='lg' overflow='hidden'>
       <Text fontSize="18px">DELIVERY TERMS</Text>
       <Checkbox size ="md" iconColor="black" borderColor="black" colorScheme="yellow">Delivery</Checkbox><br />
       <Checkbox size ="md" iconColor="black" borderColor="black" colorScheme="yellow">Pickup</Checkbox><br/><br/>     
       
       <Box>
        <Stack>
        <Text fontSize="18px">DELIVERY ADDRESS</Text>

<Input variant='flushed' focusBorderColor='yellow.300' width="100%" placeholder="Street" />
<Input variant='flushed' focusBorderColor='yellow.300' width="100%" placeholder="Landmark" />
<Input variant='flushed' focusBorderColor='yellow.300' width="100%" placeholder="House" />
<Flex>
<Input variant='flushed' focusBorderColor='yellow.300' width="70%" placeholder="Entrance" />
<Spacer/>
<Checkbox size ="md" iconColor="black" borderColor="black" colorScheme="yellow">Private House</Checkbox>
</Flex>

<Input variant='flushed' focusBorderColor='yellow.300' width="100%"  placeholder="Mobile" type="number" />
<Textarea placeholder='Comment to the Order'  focusBorderColor='yellow.300' />
        </Stack>
       
       </Box>
       <Text fontSize="18px">TERMS OF PAYMENT</Text>
       
       <Button height = "60px" colorScheme='red'  variant='ghost'onClick={handlecrbtn}>
       <Center>
       <Stack>
        <img width="50px" className={styles.creditCard}  src="https://cutewallpaper.org/24/credit-card-icon-png/card-clipart-payment-card-credit-card-icon-png-white-transparent-png-226663-pinclipart.png" ></img>
        <Text color="black" fontSize="11px">Credit Card</Text>
        </Stack>
        </Center>
        </Button>
       
        
       
        <Button height = "60px"colorScheme='red' variant='ghost' onClick={handlecashbtn} >
        <Center>
          <Stack>
           
          <img width="30px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetjh5NS8Lq3poSJB9aeTHUVW-jVpUa-LMadaQvxqv8w&usqp=CAU&ec=48600113" ></img>
          <Text color="black" fontSize="11px">Cash</Text>
          
          </Stack>
          </Center>
       
        </Button>
       
       <Box>

       </Box>
       </Box>

       <Box display={creditCard.state} width="500px" >
        
          <Stack>
            
          <Text>Please fill your card details below</Text>
          <Box padding="20px" borderRadius="15px" color ="white" bgImage="https://thumbs.dreamstime.com/b/world-map-black-background-6642186.jpg" backgroundSize="100%">
          <Image margin="40px 0 0 20px" w="50px"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidJ0AVVVWt5nQXOkx-Npbx0Lj-L4kpx4T6XTpEcZuNQ&usqp=CAU&ec=48600113" borderRadius="10px" borderBottomRadius="15px"/>
          <Text marginTop="35px" align="left">CARD NO.</Text>
          <Input  fontSize="20px" width="100%" varient="flushed" type="number" placeholder=" XXXX XXXX XXXX XXXX" onChange={(e)=>setcreditcard({...creditCard,cardNo:e.target.value})}/><br /><br />
          
          <Flex>
            <Stack alignItems="start" >
            <Text>VALID THRU</Text>
          <Input width="50%" varient="date"   placeholder='05/23' onChange={(e)=>setcreditcard({...creditCard,date:e.target.value})}/>
            </Stack>
            <Stack alignItems="start" >
            <Text>CVV</Text>
          <Input width="40%" type="number" placeholder="000" onChange={(e)=>setcreditcard({...creditCard,cvv:e.target.value})}/>
          </Stack>
          <img width="100px"  src="https://th.bing.com/th/id/OIP.RJ31bOdHwatvOYjWMG5EywHaEr?w=237&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
      
           

          </Flex>
          
          </Box>
          
          
          </Stack>
        
        
        
      </Box>

      <Button colorScheme='teal'isDisabled={paybtn} varient="outline" onClick={handleClick}>Make Payment</Button>
      </Stack>
      </Center>  

      <Box>

      </Box>
          
       
   

      </Box>
      <Box fill="100%"  height="900px" display={otppage} bgImage="https://img.freepik.com/free-photo/top-view-asian-food-ingredients-mix-with-copy-space_23-2148377557.jpg?w=2000&t=st=1685548967~exp=1685549567~hmac=da4379723d1636bb7bbcdb5a56b83e07691cf735962583e581a62c0c3b363301" bgSize="100% 1500px" backgroundPosition="center"  bgRepeat="no-repeat" >
{/* https://as2.ftcdn.net/v2/jpg/02/34/20/03/1000_F_234200318_qGqFF2C4sFC1oCYhiKwWFBcbgUVCqO2W.jpg */}
        
      <Center>
        <Box border="1px solid white" borderRadius="30px" width="300px" height="250px" padding= "50px" margin="200px 0px 0px 500px">
        <Center >
        <Stack>
          <Text color="white">OTP has been sent to you !!!</Text><br />

    <OTPInput value={otp} onChange={setotp} autoFocus OTPLength={4} otpType="number" disabled={false}  /><br />br

    <Button  onClick={checkotp}>Verify OTP</Button>
    <Button variant='link' color='white' onClick={handleClick}>Resend OTP</Button>
    </Stack>
    </Center>
   
    </Box>
    </Center>
    
      </Box>
      {isload? <Loading/>:""}
      {successfull? <Successfullpage/>:""}
      </Box>
  )
}





export default Checkout