import React from 'react';
import { Box, Text, Flex, Spacer, ChakraProvider,extendTheme,Image, Button, border, Container, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsCartPlusFill , BsInstagram, BsFacebook} from "react-icons/bs";
import logo from "./Signin_Signup/images/w.png"
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';





const Navbar = () => {
  const userName = useSelector((store)=>{
    return store.reducerReducer.userDetails.name
  })

  return (
    <Box h={"85px"} backgroundColor={"yellow.400"}>
      <Link to="/">
      <Image  borderRadius='full' boxSize={"100px"} src={logo} />
      </Link>
    <Container display={"flex"} justifyContent={"center"} gap={"40px"} mt="-70px">
    <Link to="/menu">  
      <Text fontWeight={"bold"} cursor={"pointer"} fontSize="20px">Menu</Text>
      </Link>
      <Link to="/contact"> 
      <Text fontWeight={"bold"} cursor={"pointer"} fontSize="20px">Contact</Text>
      </Link>
      <Link to="/about"> 
      <Text fontWeight={"bold"} cursor={"pointer"} fontSize="20px">About</Text>
      </Link>
       <BsInstagram style={{fontSize:"30px", cursor:"pointer"}}/>
      <BsFacebook style={{fontSize:"30px", cursor:"pointer"}}/>
    </Container>
    <Box display={"flex"} justifyContent={"end"} gap={"20px"} mt="-75px" p="40px">
    <Link to="/signup">
    <Button color={"black"} colorScheme='orange' variant='solid'>{userName===undefined ? "Login" : `Hi ${userName}`}</Button>
    </Link>
    <Link to="/cart">
      <BsCartPlusFill style={{fontSize:"30px", cursor:"pointer"}}/>
      </Link>
    </Box>
    </Box>
  )
};

export default Navbar;