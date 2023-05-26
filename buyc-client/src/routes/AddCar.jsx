import React, { useState } from "react";
import OEMList from "../components/OemList";
import CreateCar from "../components/CreateCar";
import { Box } from "@chakra-ui/react";

export default function AddCar() {
  let [oem, setoem] = useState("");
  return (
    <Box>
      {oem.length === 0 ? (
        <OEMList setoem={setoem} />
      ) : (
        <CreateCar oemSpecs={oem} />
      )}
    </Box>
  );
}
