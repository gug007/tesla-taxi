import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import Typography from "@mui/material/Typography";

import HeaderMobile from "../Header/HeaderMobile";
import CarInfo from "./CarInfo";
import CarTitle from "./CarTitle";
import HeaderCarDesktop from "../Header/HeaderCarDesktop";

export default function CarPage() {
  const [car] = useState({
    attributes: {
      name: "test",
      vehicle_images: [
        { data: { attributes: { url: "https://via.placeholder.com/150" } } },
      ],
      colors: [],
    },
  });

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <HeaderCarDesktop />
        <Container>
          <Box mt="69px">
            <CarTitle item={car?.attributes} />
          </Box>
          <Box>
            <img
              style={{ maxWidth: "100%" }}
              alt=""
              src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&"
            />
          </Box>
          <Box>
            <Typography mt={2} fontSize={{ xs: 16, md: 24 }} align="center">
              1 hour - 6,000 dram
            </Typography>
            <Typography mt={2} fontSize={{ xs: 16, md: 24 }} align="center">
              1 day - 40,000 dram
            </Typography>
          </Box>
        </Container>
      </Box>
      <CarInfo item={car.attributes} />
    </Box>
  );
}
