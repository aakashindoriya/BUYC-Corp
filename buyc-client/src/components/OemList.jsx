import { useState } from "react";
import {
  Box,
  Input,
  Stack,
  Text,
  Flex,
  Badge,
  Grid,
  GridItem,
  Skeleton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Debounce } from "../costomfunctions/debounce";
import { GetOems } from "../redux/actions/oem.actions";
const OEMList = ({ setoem }) => {
  const Oem = useSelector((s) => s.oem);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSearch = (e) => {
    setText(e.target.value);
    Debounce(dispatch(GetOems(text)), 500);
  };

  return (
    <Box textAlign={"center"} padding={10}>
      <Text fontSize={40} fontWeight={"bold"}>
        Select A Car You Want To Sell
      </Text>
      <Box p={4}>
        <Input
          maxW="50%"
          position={"sticky"}
          top="80px"
          zIndex={3}
          bg={"white"}
          type="text"
          placeholder="Find OEM"
          value={text}
          onChange={handleSearch}
          mb={4}
        />
        <Stack spacing={4}>
          {Oem.loading ? (
            <Stack spacing={4}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} height="40px" />
              ))}
            </Stack>
          ) : (
            Oem.oems?.map((oem) => (
              <Box
                key={oem._id}
                p={4}
                boxShadow="md"
                borderRadius="md"
                _hover={{ cursor: "pointer" }}
                onClick={() => setoem(oem._id)}
              >
                <Text fontWeight="bold" fontSize="lg" mb={2}>
                  {oem.model}
                </Text>
                <Flex mb={2}>
                  {oem.colors.map((color) => (
                    <Badge
                      key={color}
                      colorScheme={color}
                      variant="solid"
                      mr={2}
                      borderRadius="md"
                    >
                      {color}
                    </Badge>
                  ))}
                </Flex>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem>
                    <Text>List Price: {oem.listPrice}</Text>
                  </GridItem>
                  <GridItem>
                    <Text>Mileage: {oem.mileage}</Text>
                  </GridItem>
                </Grid>
              </Box>
            ))
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default OEMList;
