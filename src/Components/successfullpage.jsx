import { Box, Button, Center,Text,Stack } from "@chakra-ui/react";
import OTPInput from "otp-input-react"
import { Image ,center} from "@chakra-ui/react";
import { useEffect, useState } from "react";
function Successfullpage(){

    const [done,setdone]=useState()
useEffect(()=> {
    setdone(true)
})

    return <>
    <Center h={"100vh"} bg="#011029">
        <Stack>
   <Image marginTop="60px" src="https://images.squarespace-cdn.com/content/v1/6209fc508f791e729abec7d0/18641903-a848-4a3a-a0a3-c9e2ddaa15c4/02-lottie-tick-01-instant-2.gif"/>
   <Text color={"white"} fontSize="50px">Payment Successfull !</Text>
   <Text color={"white"} fontSize="20px">... Redirecting to Home</Text>
   </Stack>
    </Center>

    </>
}

export default Successfullpage;
