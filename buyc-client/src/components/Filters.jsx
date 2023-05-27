import { Box, Button, Flex, FormLabel, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState, memo } from "react";
import { useDispatch } from "react-redux";
import { GetAllCars } from "../redux/actions/oldcar.actions";
function Filters() {
  const dispatch = useDispatch();
  let init = {
    color: "",
    price: "all",
    mileage: "all",
  };
  let [query, setQuery] = useState(init);
  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  return (
    <Flex
      m="auto"
      maxW="90%"
      justifyContent={"space-around"}
      pb="3%"
      pos="sticky"
      top="80px"
      zIndex={3}
      bg="white"
    >
      <Box>
        <FormLabel htmlFor="price">Price</FormLabel>
        <Select
          name="price"
          value={query.price}
          onChange={(e) => {
            handleChange(e);
            dispatch(GetAllCars({ sort: "price", order: e.target.value }));
          }}
        >
          <option value="all">All</option>
          <option value="desc">Price Low To High</option>
          <option value="asc">Price High To Low</option>
        </Select>
      </Box>
      <Box>
        <FormLabel htmlFor="price">Mileage</FormLabel>
        <Select
          name="mileage"
          value={query.mileage}
          onChange={(e) => {
            handleChange(e);
            dispatch(GetAllCars({ sort: "mileage", order: e.target.value }));
          }}
        >
          <option value="all">All</option>
          <option value="desc">Mileage Low To High</option>
          <option value="asc">Mileage High To Low</option>
        </Select>
      </Box>
      <Box>
        <FormLabel htmlFor="price">Color</FormLabel>
        <Flex>
          <Input
            name="color"
            value={query.color}
            onChange={(e) => {
              handleChange(e);
              setQuery({ ...query, color: e.target.value });
            }}
          />
          <Button onClick={() => dispatch(GetAllCars({ color: query.color }))}>
            Apply
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default memo(Filters);
