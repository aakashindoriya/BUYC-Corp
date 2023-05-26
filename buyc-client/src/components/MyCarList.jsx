import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCars } from "../redux/actions/oldcar.actions";
import { useNavigate } from "react-router-dom";
function DeleteChecbox({ que, setQue, id }) {
  const [check, SetCheck] = useState(false);
  function HandleChange(e) {
    if (check) {
      const filter = que.filter((el) => el != id);
      setQue([...filter]);
    } else {
      setQue([...que, id]);
    }
    SetCheck(!check);
  }
  return <Checkbox isChecked={check} onChange={HandleChange}></Checkbox>;
}

export default function MyCarList() {
  const car = useSelector((s) => s.car);
  const auth = useSelector((s) => s.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Delete, SetDelete] = useState([]);
  return (
    <Box>
      <Flex>
        <Button
          isDisabled={Delete.length > 1 || Delete.length == 0 ? true : false}
          onClick={() => navigate(`/edit/${Delete[0]}`)}
        >
          Edit
        </Button>
        <Button
          isDisabled={Delete.length == 0 ? true : false}
          onClick={() => dispatch(DeleteCars(Delete))}
        >
          Delete
        </Button>
      </Flex>
      {car.cars?.map((el) => (
        <Flex
          w="100%"
          p="2%"
          alignItems={"center"}
          justifyContent={"space-around"}
          boxShadow={"md"}
        >
          <Box>
            <Image
              m="auto"
              maxW={"150px"}
              maxH={"150px"}
              src={el.image}
              alt={el.title}
            />
          </Box>

          <Box>
            <Text fontSize={"20"}>{el.title}</Text>
          </Box>
          <Box>
            <Text>{el.description}</Text>
          </Box>
          {auth.id == el.seller && (
            <Box>
              <DeleteChecbox que={Delete} setQue={SetDelete} id={el._id} />
            </Box>
          )}
        </Flex>
      ))}
    </Box>
  );
}
