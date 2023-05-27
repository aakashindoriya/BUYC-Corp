import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import PopOver from "./PopOver";
import CreateOEM from "./CreateOem";
import { useSelector } from "react-redux";

export default function Nav() {
  const auth = useSelector((s) => s.auth);
  return (
    <Flex
      pos="sticky"
      top="0%"
      bg="teal.100"
      w="100%"
      h="80px"
      justifyContent={"space-between"}
      alignItems={"center"}
      zIndex={"2"}
    >
      <Box w="30%">
        <Link to="/">
          <Text fontSize={"20px"} fontWeight={"bold"}>
            BUYC
          </Text>
        </Link>
      </Box>
      <Flex w="50%" justifyContent={"space-between"} p="2%">
        {auth.role == "seller" && (
          <Link to="/mycars">
            <Button variant="link">MyCars</Button>
          </Link>
        )}
        {auth.role == "seller" && (
          <Link to="/addcar">
            <Button variant="link">SellCar</Button>
          </Link>
        )}
        {!auth.isAuth && (
          <Link to="/login">
            <Button variant="link">LogIn</Button>
          </Link>
        )}
        <Link to="/Signup">
          <Button variant="link">SignUp</Button>
        </Link>
        {auth.role == "oem" && (
          <PopOver buttonLabel="Add OEM">
            <CreateOEM />
          </PopOver>
        )}
      </Flex>
    </Flex>
  );
}
