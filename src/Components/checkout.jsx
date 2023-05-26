import React from 'react'
import { Input,Box,Center,Text,Checkbox,Flex,Spacer,Stack,Textarea, Button,Image} from '@chakra-ui/react'
import styles from "./checkout.module.css";
import { useState } from 'react';
import Otp from './otp';

function Checkout() {
  const [creditCard,setcreditcard]=useState({state:"none",
 cardNo:"",
cvv:"",
date:""});


  let handleClick=()=>{
    if(creditCard.cardNo==""||creditCard.date==""||creditCard.cvv==""){
      alert('fill details')
 
    }else{
     return(
      <Box>
        <Button>hiohlb</Button>
      </Box>
     )       
  
    }
  }

 
 
  return (
    
      <Box>
      <Center>
      <Stack>
      <Box w="500px" height="600px" align="left" padding="15px" borderWidth='2px'backgroundColor="white" borderRadius='lg' overflow='hidden'>
       <Text fontSize="18px">DELIVERY TERMS</Text>
       <Checkbox size ="md" iconColor="black" borderColor="black" colorScheme="yellow">Delivery</Checkbox><br />
       <Checkbox size ="md" iconColor="black" borderColor="black" colorScheme="yellow">Pickup</Checkbox><br/><br/>     
       
       <Box>
        <Stack>
        <Text fontSize="18px">DELIVERY ADDRESS</Text>

<Input variant='flushed' focusBorderColor='yellow.300' width="100%" placeholder="Street" />
<Input variant='flushed' focusBorderColor='yellow.300' width="100%" placeholder="Street" />
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
       
       <Button height = "60px" colorScheme='red'  variant='ghost'>
       <Center>
       <Stack>
        <img width="50px" className={styles.creditCard}  src="https://cutewallpaper.org/24/credit-card-icon-png/card-clipart-payment-card-credit-card-icon-png-white-transparent-png-226663-pinclipart.png" ></img>
        <Text color="black" fontSize="11px">Credit Card</Text>
        </Stack>
        </Center>
        </Button>
       
        
       
        <Button height = "60px"colorScheme='red' variant='ghost' onClick={()=>{creditCard=="none"? setcreditcard("block"):setcreditcard("none")}}>
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

       <Box display={creditCard} width="500px" >
        
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

      <Button colorScheme='teal' varient="outline" onClick={handleClick}>Make Payment</Button>
      </Stack>
      </Center>  

      
          
       
   

      </Box>
  )
}





export default Checkout