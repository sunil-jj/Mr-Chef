import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import Loader from "./Loader";

function ResetPassword({isOpen, onClose}) {
  const toast = useToast();
  const [inputFocus, setInputFocus] = useState({
    field2: false,
    field4: false,
  });
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [loader, setloader] = useState(false);

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

  const handleSubmitButton = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        const user = res.data.find((data) => data.mobile === mobile);
        if (user) {
          const updatedUser = { ...user, password: password };
          axios
            .put(`http://localhost:8080/users/${user.id}`, updatedUser)
            .then((res) => {
              toast({
                title: "Reset successfully",
                description: "Password has been successfully reset",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              setloader(true);
              setTimeout(() => {
                setloader(false);
              }, 2000);
            })
            .catch((error) => {
              console.error("Failed to update password:", error);
            });
        } else {
          toast({
            title: "Invalid mobile number",
            description: "Enter Registered mobile number",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.error("Failed to retrieve user data:", error);
      });
  };

  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Reset Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                  onChange={(e) => setmobile(e.target.value)}
                  variant="flushed"
                  type="number"
                  placeholder="Registered phone number"
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
                  onChange={(e) => setpassword(e.target.value)}
                  variant="flushed"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="New password"
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
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmitButton} px="20px" colorScheme="orange">
              {loader ? <Loader />: "Reset Password"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { ResetPassword };
