import { Box, Flex, Image, Text, Badge, Skeleton } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Filters from "./Filters";

const CarList = () => {
  const cars = useSelector((s) => s.car);

  if (cars.loading) {
    return (
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        {[...Array(4)].map((_, index) => (
          <Box
            key={index}
            width={["100%", "50%", "33.33%", "25%"]}
            padding={4}
            marginBottom={4}
            textAlign="center"
          >
            <Skeleton height="200px" mb={2} />
            <Skeleton height="16px" width="80%" mb={2} />
            <Skeleton height="12px" width="60%" mb={1} />
            <Skeleton height="12px" width="50%" mb={1} />
            <Skeleton height="12px" width="70%" mb={1} />
            <Skeleton height="12px" width="80%" mb={1} />
            <Skeleton height="12px" width="90%" mb={1} />
            <Skeleton height="12px" width="80%" mb={1} />
            <Skeleton height="12px" width="100%" />
          </Box>
        ))}
      </Flex>
    );
  }

  return (
    <Box p="3%">
      <Filters />
      {cars.cars?.map((car) => (
        <Flex
          key={car._id}
          w={["90%", "60%"]}
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent={"space-evenly"}
          boxShadow={"md"}
          m="2%"
        >
          <Image
            src={car.image}
            alt={car.oemSpecs.model}
            width={["99%", "30%"]}
            maxH={"300px"}
            mb={4}
            borderRadius={"12px"}
          />
          <Box marginTop={2} w={["99%", "30%"]}>
            <Text fontWeight="bold" fontSize="lg" mb={1}>
              {car.oemSpecs.model}
            </Text>
            <Text>{`Year: ${car.oemSpecs.year}`}</Text>
            <Text>{`List Price: ${car.oemSpecs.listPrice}`}</Text>
            <Text>{`Mileage: ${car.oemSpecs.mileage}`}</Text>
            <Text>{`Power: ${car.oemSpecs.power}`}</Text>
            <Text>{`Max Speed: ${car.oemSpecs.maxSpeed}`}</Text>
            <Text>{`Accidents Reported: ${car.accidentsReported}`}</Text>
            <Text>{`Previous Buyers: ${car.previousBuyers}`}</Text>
            <Text>{`Registration Place: ${car.registrationPlace}`}</Text>
            <Text fontWeight="bold" mt={4}>
              Colors:
            </Text>
            <Flex justifyContent="center" mt={2}>
              {car.oemSpecs.colors.map((color) => (
                <Badge key={color} colorScheme={color} mx={1}>
                  {color}
                </Badge>
              ))}
            </Flex>
            {/* Add additional details here */}
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default CarList;
