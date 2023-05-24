import {
  Box,
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  InputRightElement,
  Button,
  Checkbox,
  Text
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import {RiLockPasswordFill} from "react-icons/ri"
import { MdEmail } from "react-icons/md";
import styles from "./style.module.css";
import React from "react";
import background from "./bg2.jpg";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Signup(props) {
  const [inputFocus, setInputFocus] = useState({
    field1: false,
    field2: false,
    field3: false,
    field4: false,
  });

  const [show, setShow] = useState(false)
  const [captcha, setcaptcha] = useState(false); 


  const handleClick = () => setShow(!show)

  const onChange = () => {
    // captcha
    setcaptcha(true);
  };

  const handleInputFocus = (fieldName) => {
    setInputFocus((prevState) => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  const handleInputBlur = (fieldName) => {
    setInputFocus((prevState) => ({
      ...prevState,
      [fieldName]: false,
    }));
  };

  return (
    <Box bg={"#011029"} h="100vh" w="100vw">
      <Center>
        <Box
          backgroundImage={`url(${background})`}
          backgroundSize="100% 100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          h="650px"
          w="1000px"
          mt="65px"
          // border={"2px solid yellow"}
          p="10px"
          borderRadius={"7px"}
        >
          <Center>
            <Box w="400px" h="400px"></Box>
            <Box
              w="550px"
              h="630px"
              bg="white"
              // border={"1px solid red"}
              borderRadius={"7px"}
              mr="-30px"
              mt="-3px"
            >
              <Center>
                <Box className={styles.welcome_box}>
                  <Heading pt="10px" as="h1" className={styles.welcome_box}>
                    Welcome
                  </Heading>
                </Box>
              </Center>
              <Center>
                <Tabs colorScheme="yellow">
                  <TabList>
                    <Tab fontSize={"25px"} w="250px">
                      Login
                    </Tab>
                    <Tab fontSize={"25px"} w="250px">
                      Registration
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                      <Stack spacing={4}>
                        <InputGroup>
                          <InputLeftElement
                            color={inputFocus.field1 ? "#B7791F" : "gray.500"}
                            pointerEvents="none"
                          >
                            <FaUserAlt />
                          </InputLeftElement>
                          <Input
                            variant="flushed"
                            type="text"
                            placeholder="Full Name"
                            focusBorderColor="#B7791F"
                            borderColor="#011029"
                            onFocus={() => handleInputFocus("field1")}
                            onBlur={() => handleInputBlur("field1")}
                          />
                        </InputGroup>

                        <InputGroup>
                          <InputLeftElement
                            color={inputFocus.field2 ? "#B7791F" : "gray.500"}
                            pointerEvents="none"
                          >
                            <BsFillTelephonePlusFill />
                          </InputLeftElement>
                          <Input
                            variant="flushed"
                            type="tel"
                            placeholder="Phone number"
                            focusBorderColor="#B7791F"
                            borderColor="#011029"
                            onFocus={() => handleInputFocus("field2")}
                            onBlur={() => handleInputBlur("field2")}
                          />
                        </InputGroup>

                        <InputGroup>
                          <InputLeftElement
                            color={inputFocus.field3 ? "#B7791F" : "gray.500"}
                            pointerEvents="none"
                          >
                            <MdEmail />
                          </InputLeftElement>
                          <Input
                            variant="flushed"
                            type="email"
                            placeholder="Email Address"
                            focusBorderColor="#B7791F"
                            borderColor="#011029"
                            onFocus={() => handleInputFocus("field3")}
                            onBlur={() => handleInputBlur("field3")}
                          />
                        </InputGroup>

                        <InputGroup>
                          <InputLeftElement
                            color={inputFocus.field4 ? "#B7791F" : "gray.500"}
                            pointerEvents="none"
                          >
                            <RiLockPasswordFill />
                          </InputLeftElement>
                          <Input
                            variant="flushed"
                            pr='4.5rem'
        type={show ? 'text' : 'password'}
                            placeholder="Password"
                            focusBorderColor="#B7791F"
                            borderColor="#011029"
                            onFocus={() => handleInputFocus("field4")}
                            onBlur={() => handleInputBlur("field4")}
                          />
                          <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
                          </InputRightElement>
                        </InputGroup>
                      </Stack>
                      <Center py={"20px"}>
              <Checkbox colorScheme='green' pr={"7px"} /> <p style={{ fontSize:"15px"}}>I accept<span style={{ fontWeight:"bold", color:"green"}}> Terms of Use</span></p>
              </Center>
                      <Center>
                {/* google captcha */}
                <ReCAPTCHA
                  sitekey="6LdecqQlAAAAAF5O-JC8ProsSC_nHykNvfTpWp2B"
                  onChange={onChange}
                />
              </Center>
              <Center py={"20px"}>
                <Button colorScheme='orange'>Register Now</Button>
              </Center>
              <p className={styles.textAnimation} ><span style={{color:"#DD6A1F",fontWeight:"bold", fontSize:"30px"}}>-5%</span> on everything for registered users</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Center>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export {Signup};
