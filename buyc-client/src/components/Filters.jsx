import { Box, Button, Flex, FormLabel, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllCars } from "../redux/actions/oldcar.actions";
export default function Filters() {
  const dispatch = useDispatch();
  let init = {
    color: "",
    lte: 0,
    gte: 0,
    sort: "price",
    order: null,
  };
  let [query, setQuery] = useState(init);
  useEffect(() => {}, []);
  return (
    <Flex>
      <Box>
        <FormLabel htmlFor="price">Price</FormLabel>
        <Select
          onChange={(e) => {
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
          onChange={(e) => {
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
            value={query.color}
            onChange={(e) => setQuery({ ...query, color: e.target.value })}
          />
          <Button onClick={() => GetAllCars({ color: query.color })}>
            Apply
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
