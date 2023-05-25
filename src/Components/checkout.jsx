import React from 'react'
import { Input,Box,Center,Text,Checkbox,Flex,Spacer,Stack,Textarea} from '@chakra-ui/react'
import styles from "./checkout.module.css";

function Checkout() {
  return (
    <div className='lll'>
      <Center>
      <Box w="30%" height="600px" align="left" padding="15px" borderWidth='2px' borderRadius='lg' overflow='hidden'>
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
       <div className="carddiv" >
        <img className={styles.creditCard}  src="https://cutewallpaper.org/24/credit-card-icon-png/card-clipart-payment-card-credit-card-icon-png-white-transparent-png-226663-pinclipart.png" ></img>
        </div>
       <Box>

       </Box>
       </Box>
      </Center>
       
   

    </div>
  )
}

export default Checkout