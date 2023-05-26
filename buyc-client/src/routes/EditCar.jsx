import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import { UplodeFile } from "../costomfunctions/upload";
import { useDispatch } from "react-redux";
import { AddCar, EditSingleCar } from "../redux/actions/oldcar.actions";
import { useParams } from "react-router-dom";
import axios from "axios";
import { progress } from "framer-motion";

const EditCar = ({ oemSpecs }) => {
  const [formData, setFormData] = useState({});
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      EditSingleCar({
        ...formData,
        carid: formData._id,
      })
    );
    console.log(formData);
    setFormData({});
  };
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/car/siglecar/${id}`)
      .then((res) => {
        setFormData(res.data);
        setPic(res.data.image);
      });
  }, []);
  return (
    <Box maxWidth="500px" margin="0 auto">
      <Heading as="h1" size="lg" textAlign="center" mb={8}>
        Fill Car Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Kms on Odometer</FormLabel>
          <Input
            type="number"
            name="kmsOnOdometer"
            value={formData.kmsOnOdometer}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Major Scratches</FormLabel>
          <Select
            name="majorScratches"
            value={formData.majorScratches}
            onChange={handleChange}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Original Paint</FormLabel>
          <Select
            name="originalPaint"
            value={formData.originalPaint}
            onChange={handleChange}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Previous Buyers</FormLabel>
          <Input
            type="number"
            name="previousBuyers"
            value={formData.previousBuyers}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Registration Place</FormLabel>
          <Input
            type="text"
            name="registrationPlace"
            value={formData.registrationPlace}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Edit
        </Button>
      </form>
    </Box>
  );
};

export default EditCar;
