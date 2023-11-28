import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CarInfo() {
  return (
    <Box
      mt="38px"
      bgcolor="#1B2F39"
      pt={{ xs: "40px", md: "100px" }}
      pb={{ xs: "40px", md: "100px" }}
      color="white"
    >
      <Container>
        <Box
          mt={{ xs: "22px", md: "45px" }}
          pb="6px"
          display="flex"
          justifyContent="space-between"
          fontSize={{ xs: "13px", md: "32px" }}
          fontWeight={700}
          color="white"
        >
          Tesla Rent in Armenia
        </Box>
      </Container>
    </Box>
  );
}
