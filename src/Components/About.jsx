import { Box, Center, Container, Image} from '@chakra-ui/react'
import React from 'react'

function About() {
  return (

    <Box >
      <h2 style={{fontFamily:"cursive",fontWeight:"bold",fontSize:"35px"}} > About Us</h2>
      <Center>
      <Image w="50%"  src=" https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?b=1&s=612x612&w=0&k=20&c=orfnpNSuRtQ88QcXjT2_YORJ0DsrLL7uBoE9Pt3njKM="/>
      
      </Center>
        <Center>   
      <Box borderBottomLeftRadius="150px"  w="50%" bg="darkcyan"  color="white">
          <Container  marginLeft="50px" justifyContent="center" maxW="550px">              
            
               "Mr.Chef is a street food with Odessa hospitality.
We have been making our guests happy since 2015.
Here they will be happy to cook you the most delicious and fast,
and most importantly, fresh food!
They will delight you with a great assortment of not only bombed shawarma,
but also delicious pastires, a variety
of pizzas, khachapuri and other oriental dishes.
We have delicious homemade drinks and coffee 
A charge of positive and pleasure is provided for you . 
          
          </Container>
        </Box>
          </Center>

    </Box>
  )
}

export default About