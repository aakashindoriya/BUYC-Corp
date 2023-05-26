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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../redux/actions/auth.actions";
let init = {
  email: "",
  password: "",
};
export default function Login() {
  const auth = useSelector((s) => s.auth);
  const loading = useSelector((s) => s.auth.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setdata] = useState(init);
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  async function HandleLogin() {
    dispatch(LogIn({ ...data }));
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
      history(from);
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
      minH={"100vh"}
      minW={"100%"}
      align={"center"}
      justify={"center"}
      bg="blue.200"
    >
      <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            BUYC Log-In
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
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
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
                isDisabled={loading ? true : false}
                onClick={HandleLogin}
              >
                Log In
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Do'nt have an account?{" "}
                <Link to="/signup" color={"blue.400"}>
                  Sign-Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
