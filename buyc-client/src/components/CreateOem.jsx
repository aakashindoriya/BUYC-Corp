import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AddOems } from "../redux/actions/oem.actions";

const CreateOEM = () => {
  const [oemData, setOemData] = useState({
    model: "",
    year: "",
    listPrice: "",
    colors: [],
    mileage: "",
    power: "",
    maxSpeed: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform submit action with oemData

    dispatch(AddOems(oemData));
  };

  return (
    <Box>
      <Stack spacing={3}>
        <FormControl>
          <FormLabel>Model</FormLabel>
          <Input
            name="model"
            value={oemData.model}
            onChange={handleChange}
            placeholder="Model"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <Input
            name="year"
            value={oemData.year}
            onChange={handleChange}
            placeholder="Year"
          />
        </FormControl>
        <FormControl>
          <FormLabel>List Price</FormLabel>
          <Input
            name="listPrice"
            value={oemData.listPrice}
            onChange={handleChange}
            placeholder="List Price"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Mileage</FormLabel>
          <Input
            name="mileage"
            value={oemData.mileage}
            onChange={handleChange}
            placeholder="Mileage"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Power</FormLabel>
          <Input
            name="power"
            value={oemData.power}
            onChange={handleChange}
            placeholder="Power"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Max Speed</FormLabel>
          <Input
            name="maxSpeed"
            value={oemData.maxSpeed}
            onChange={handleChange}
            placeholder="Max Speed"
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateOEM;
