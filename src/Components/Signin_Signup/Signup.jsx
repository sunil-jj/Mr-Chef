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
  Icon,
  useToast
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import styles from "./style.module.css";
import React from "react";
import background from "../Signin_Signup/images/bg2.jpg";
import Signin from "./Signin";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "./Loader";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios"
import {useDispatch} from "react-redux"
import { postUserSuccess, postUserFaliure } from "../../Redux/loginRedux/loginActionCreater";


function Signup(props) {
  const dispatch = useDispatch();
  const [inputFocus, setInputFocus] = useState({
    field1: false,
    field2: false,
    field3: false,
    field4: false,
  });
  const toast = useToast()

  const [show, setShow] = useState(false);
  const [captcha, setcaptcha] = useState(false);
  const [loader, setloader] = useState(false);

  const [isChecked, setisChecked] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => setShow(!show);

  const onChange = () => {
    // captcha
    setcaptcha(!captcha);
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

  const handleLoader = () => {
    
  };

  //validation

  const isValidated = () => {
    let isproceed = true;
    let errormessage = "";
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Name";
    }
    if (mobile === null || mobile === "") {
      isproceed = false;
      errormessage += " Country";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }else if(!email.includes("@")){
      isproceed = false;
      errormessage += " Invalid Email";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    

    if (!isproceed) {
      toast({
        title: "Enter "+errormessage,
        description: "Registration failed due to :" + errormessage,
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      // toast.warning(errormessage);
    } else {
      //write something
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userDataObj = { name, mobile, email, password };
    if (isValidated()) {
      axios.get("http://localhost:8000/users")
      .then((res)=>{
        const user = res.data.find((data) => data.mobile === mobile);
        if(!user){
          axios.post("http://localhost:8000/users", userDataObj)
        .then((res) => {
          dispatch(postUserSuccess(res.data));
          toast({
            title: "Registration successfully",
            description: "Account created successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 2000);
          // navigate("/signin");
        })
        .catch((err) => {
          dispatch(postUserFaliure())
          toast({
            title: "Registration Failed",
            description: "Failed :" + err.message,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          // toast.error("Failed :" + err.message);
        });
        }else{
          toast({
            title: "Registered number",
            description: "Enter the new mobile number",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        }
      })
    }
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
                <Box className={styles.welcome_div}>
                  <Heading pt="10px" as="h1" className={styles.welcome_div}>
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
                      {/*  */}
                      <Signin />
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
                          onChange={(e) => setName(e.target.value)}
                          value={name}
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
                          onChange={(e) => setmobile(e.target.value)}
                          value={mobile}
                            variant="flushed"
                            type="number"
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
                          onChange={(e) => setemail(e.target.value)}
                          value={email}
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
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                            variant="flushed"
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            focusBorderColor="#B7791F"
                            borderColor="#011029"
                            onFocus={() => handleInputFocus("field4")}
                            onBlur={() => handleInputBlur("field4")}
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? (
                                <Icon boxSize={4} as={FiEye}></Icon>
                              ) : (
                                <Icon boxSize={4} as={FiEyeOff}></Icon>
                              )}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </Stack>
                      <Center py={"20px"}>
                        <Checkbox onChange={()=>setisChecked(!isChecked)} colorScheme="green" pr={"7px"} />{" "}
                        <p style={{ fontSize: "15px" }}>
                          I accept
                          <span style={{ fontWeight: "bold", color: "green", paddingLeft:"5px" }}>
                            Terms of Use
                          </span>
                        </p>
                      </Center>
                      <Center>
                        {/* google captcha */}
                        <ReCAPTCHA
                          sitekey="6LdecqQlAAAAAF5O-JC8ProsSC_nHykNvfTpWp2B"
                          onChange={onChange}
                        />
                      </Center>
                      <Center py={"20px"}>
                        {
                          // handleLoader
                        isChecked && captcha ? <Button onClick={handleSubmit} colorScheme="orange">
                         {loader ? <Loader /> : "Register Now"}
                       </Button> : <Button isDisabled  colorScheme="orange">
                            {loader ? <Loader /> : "Register Now"}
                          </Button>
                        }
                      </Center>
                      <p className={styles.textAnimation}>
                        <span
                          style={{
                            color: "#DD6A1F",
                            fontWeight: "bold",
                            fontSize: "30px",
                          }}
                        >
                          -5%
                        </span>{" "}
                        on everything for registered users
                      </p>
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

export { Signup };






