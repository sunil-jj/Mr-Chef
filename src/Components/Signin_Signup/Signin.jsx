import { useState } from "react";
import logo from "../Signin_Signup/images/w.png";
import ReCAPTCHA from "react-google-recaptcha";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { fetchUserFaliure, fetchUserSuccess } from "../../Redux/loginRedux/loginActionCreater";
import { ResetPassword } from "./ResetPassword";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Image,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
  Icon,
  useToast,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import Loader from "./Loader";
function Signin(props) {
  const toast = useToast()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [inputFocus, setInputFocus] = useState({
    field2: false,
    field4: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const [captcha, setcaptcha] = useState(false);
  const [loader, setloader] = useState(false);
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
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

  // const handleLoader = () => {
  //   setloader(true);
  //   setTimeout(() => {
  //     setloader(false);
  //   }, 1000);
  // };

  const isValidated = () => {
    let isproceed = true;
    let errormessage = "";
    if (mobile === null || mobile === "") {
      isproceed = false;
      errormessage += " Mobile";
    }

    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    

    if (!isproceed) {
      toast({
        title: "Enter "+errormessage,
        description: "Login failed due to :" + errormessage,
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
    let userDataObj = { mobile, password };
    if (isValidated()) {
      axios.get("http://localhost:8000/users")
        .then((res) => {
         const filterredData = res.data.filter((data) => {
          return data.mobile ===mobile && data.password ===password
         })
         if(filterredData.length > 0) {
          dispatch(fetchUserSuccess(filterredData[0]))
          console.log(filterredData[0 ], "success")
          toast({
            title: "Signin successfully",
            description: "You have successfully Signed-in",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setloader(true);
    setTimeout(() => {
      setloader(false);
      navigate("/")
    }, 2000);
         }else{
          toast({
            title: "Wrong Credentials",
            description: "Input Correct Credentials",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
         }
          
          // navigate("/signin");
        })
        .catch((err) => {
          dispatch(fetchUserFaliure())
          toast({
            title: "Signed-in Failed",
            description: "Failed :" + err.message,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          // toast.error("Failed :" + err.message);
        });
    }
  };


  return (
    <Box>
      <Box>
        <Center>
          <Image my="-60px" borderRadius="full" boxSize="300px" src={logo} />
        </Center>
      </Box>

      <Stack>
        <InputGroup>
          <InputLeftElement
            color={inputFocus.field2 ? "#B7791F" : "gray.500"}
            pointerEvents="none"
          >
            <BsFillTelephonePlusFill />
          </InputLeftElement>
          <Input
          value={mobile}
          onChange={(e)=>setmobile(e.target.value)}
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
            color={inputFocus.field4 ? "#B7791F" : "gray.500"}
            pointerEvents="none"
          >
            <RiLockPasswordFill />
          </InputLeftElement>
          <Input
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
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
      <Text onClick={onOpen} _hover={{color:"#DD6A1F", cursor:"pointer", textDecoration:"underline"}} pt="5px" textAlign={"end"}>Reset Password</Text>
      <Center pt={"20px"}>
        {/* google captcha */}
        <ReCAPTCHA
          sitekey="6LdecqQlAAAAAF5O-JC8ProsSC_nHykNvfTpWp2B"
          onChange={onChange}
        />
      </Center>
      <Center py={"20px"}>
        {
         captcha ? <Button onClick={handleSubmit} px="20px" colorScheme="orange">
            {loader ? <Loader /> : "Login Now"}
          </Button>: <Button isDisabled px="20px" colorScheme="orange">
            {loader ? <Loader /> : "Login Now"}
          </Button>
        }
      </Center>
      <ResetPassword isOpen={isOpen} onClose={onClose}/>
    </Box>
  );
}

export default Signin;
