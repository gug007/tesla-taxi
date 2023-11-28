import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

 import HeaderCarDesktop from "./HeaderCarDesktop";

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
            <Typography
              variant="h3"
              fontSize={{ md: "61px" }}
              lineHeight={{ xs: "100%", md: "140%" }}
              fontWeight={700}
              letterSpacing="-0.05em"
            >
              Rent Tesla with driver in Armenia
              {/*
                 Վարձով Tesla վարորդով Հայաստանում
                 Аренда Tesla с водителем в Армении
              */}
            </Typography>
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
      <Box
        mt="38px"
        bgcolor="#1B2F39"
        pt={{ xs: "40px", md: "100px" }}
        pb={{ xs: "40px", md: "100px" }}
        color="white"
      >
        <Container></Container>
      </Box>
    </Box>
  );
}
