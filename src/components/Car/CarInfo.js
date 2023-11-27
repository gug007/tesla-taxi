import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import CarInfoItem from "./CarInfoItem";
import { getMaxChargeRate, getRange } from "../../utils/car";
import RangeModal from "../Cars/Modals/RangeModal";
import MaxChargingSpeedModal from "../Cars/Modals/MaxChargingSpeedModal";

export default function CarInfo({ item }) {
  const [openRange, setOpenRange] = useState(false);
  const [openChargingSpeed, setChargingSpeed] = useState(false);

  const handleToggleRange = (e) => {
    if (e) e.stopPropagation();
    setOpenRange((v) => !v);
  };

  const handleChargingSpeed = (e) => {
    if (e) e.stopPropagation();
    setChargingSpeed((v) => !v);
  };

  return (
    <Box
      mt="38px"
      bgcolor="#1B2F39"
      pt={{ xs: "40px", md: "100px" }}
      pb={{ xs: "40px", md: "100px" }}
      color="white"
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={7}>
            <Box
              mb={{ xs: "12px", md: "70px" }}
              fontSize={{ xs: "25px", md: "48px" }}
              fontWeight={700}
              color="white"
            >
              EV stats
            </Box>
            <Box>
              <Box>
                <Box>
                  <Box
                    mx="-10px"
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <CarInfoItem
                      value={parseFloat(item.range)}
                      boxes={getRange(parseFloat(item.range))}
                      desc="mi"
                      link="Range"
                      onClick={handleToggleRange}
                    />
                    <Box mr={{ md: "-75px" }}>
                      <CarInfoItem
                        value={parseFloat(item.charging_speed)}
                        boxes={getMaxChargeRate(
                          parseFloat(item.charging_speed)
                        )}
                        desc="kW"
                        link="Max charging speed"
                        onClick={handleChargingSpeed}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box py="20px" px="10px">
                <Box
                  mb="12px"
                  fontSize={{ xs: "13px", md: "32px" }}
                  fontWeight={700}
                  color="#73E5FF"
                >
                  More stats
                </Box>
                <Box
                  mt={{ xs: "22px", md: "45px" }}
                  pb="6px"
                  display="flex"
                  justifyContent="space-between"
                  fontSize={{ xs: "13px", md: "32px" }}
                  fontWeight={700}
                  color="white"
                  borderBottom="1px solid rgba(255, 255, 255, 0.07)"
                >
                  <Box>Drivetrain</Box>
                  <Box>{item.drive_train}</Box>
                </Box>
                <Box
                  mt={{ xs: "22px", md: "60px" }}
                  pb="6px"
                  display="flex"
                  justifyContent="space-between"
                  fontSize={{ xs: "13px", md: "32px" }}
                  fontWeight={700}
                  color="white"
                  borderBottom="1px solid rgba(255, 255, 255, 0.07)"
                >
                  <Box>0-60</Box>
                  <Box>{item.zero_to_60_mph} sec</Box>
                </Box>
                <Box
                  mt={{ xs: "22px", md: "60px" }}
                  pb="6px"
                  display="flex"
                  justifyContent="space-between"
                  fontSize={{ xs: "13px", md: "32px" }}
                  fontWeight={700}
                  color="white"
                  borderBottom="1px solid rgba(255, 255, 255, 0.07)"
                >
                  <Box>Style</Box>
                  <Box>{item.body_style}</Box>
                </Box>
              </Box>
              {openRange && (
                <RangeModal open title="Range" onClose={handleToggleRange} />
              )}
              {openChargingSpeed && (
                <MaxChargingSpeedModal onClose={handleChargingSpeed} />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
