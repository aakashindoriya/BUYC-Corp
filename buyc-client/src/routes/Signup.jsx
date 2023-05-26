import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignUp } from "../redux/actions/auth.actions";
let init = {
  email: "",
  password: "",
  name: "",
  role: "",
};

export default function Signup() {
  const auth = useSelector((s) => s.auth);
  let dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [showPassword, setShowPassword] = useState(false);
  const [data, setdata] = useState(init);
  const toast = useToast();
  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  async function HandleSignup() {
    let temp = {
      username: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };
    dispatch(SignUp(temp));
    setdata(init);
  }
  useEffect(() => {
    if (auth.isAuth) {
      toast({
        title: `Welcome to BUYC`,
        description: "Registration successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      if (auth.role != "admin") {
        history(from);
      }
    }
    if (auth.isError) {
      toast({
        title: `somthing went wrong`,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  }, [auth.isAuth, auth.isError]);
  return (
    <Flex
      minW={"100%"}
      align={"center"}
      justify={"center"}
      position="relative"
      bg="blue.200"
    >
      <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            BUYC Sign-up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            A New Place To Sell/Buy Cars ♠
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                _focusVisible={{
                  borderColor: "green",
                }}
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl id="role">
              <FormLabel>Role</FormLabel>
              <Select
                _focusVisible={{
                  borderColor: "green",
                }}
                name="role"
                value={data.role}
                onChange={(e) => handleChange(e)}
              >
                <option value="consumer">Buyer</option>
                <option value="seller">Seller</option>
                {auth.role == "admin" && <option value="oem">OEM</option>}
              </Select>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>

              <InputGroup>
                <Input
                  _focusVisible={{
                    borderColor: "green",
                  }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={(e) => handleChange(e)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    _hover={{
                      bg: "transparent",
                    }}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={HandleSignup}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
