import { useState } from "react";
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
import { AddCar } from "../redux/actions/oldcar.actions";

const CreateCar = ({ oemSpecs }) => {
  const [formData, setFormData] = useState({
    oemSpecs: oemSpecs,
    title: "",
    description: "",
    price: 0,
    colors: "",
    kmsOnOdometer: 0,
    majorScratches: false,
    originalPaint: false,
    accidentsReported: 0,
    previousBuyers: 0,
    registrationPlace: "",
  });
  const [pic, setPic] = useState(
    "https://kaleidousercontent.com/removebg/designs/b6f1aec1-de72-4e0e-9921-6ab407475be2/thumbnail_image/car-photo-optimizer-thumbnail.png"
  );
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
    const temp = formData.colors.trim().split(",");
    dispatch(AddCar({ ...formData, image: pic, colors: temp }));
    setFormData({
      oemSpecs: oemSpecs,
      title: "",
      description: "",
      price: 0,
      colors: "",
      kmsOnOdometer: 0,
      majorScratches: false,
      originalPaint: false,
      accidentsReported: 0,
      previousBuyers: 0,
      registrationPlace: "",
    });
  };

  return (
    <Box maxW={"90%"} margin="0 auto">
      <Heading as="h1" size="lg" textAlign="center" mb={8}>
        Fill Car Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="pic">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => UplodeFile(e.target.files[0], setPic)}
          />
        </FormControl>
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
          <FormLabel>Colors</FormLabel>
          <Input
            name="colors"
            value={formData.colors}
            placeholder={"red,black,white"}
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
          <FormLabel>Accidents Reported</FormLabel>
          <Input
            type="number"
            name="accidentsReported"
            value={formData.accidentsReported}
            onChange={handleChange}
          />
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
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreateCar;
