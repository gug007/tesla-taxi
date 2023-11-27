import React, { useState } from "react";
import Box from "@mui/material/Box";

import Square from "./Square";
import deliveryIcon from "../../icons/delivery-icon.svg";
import { getMaxChargeRate, getRange } from "../../utils/car";
import MaxChargingSpeedModal from "./Modals/MaxChargingSpeedModal";
import RangeModal from "./Modals/RangeModal";

export default function CarDetails({ item }) {
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
    <Box display="flex" mt={2}>
      <Box mr="23px" display="flex" flexDirection="column">
        <Box display="flex" color="#1B2F39" fontSize="20px">
          {parseFloat(item.range)}{" "}
          <Box mt="4px" fontSize="16px" ml="2px">
            mi
          </Box>
        </Box>
        <Box display="flex">
          {Array(4)
            .fill()
            .map((v, i) => (
              <Square key={i} selected={getRange(parseFloat(item.range)) > i} />
            ))}
        </Box>
        <Box
          mt="2px"
          display="flex"
          color="#A4A4A4"
          fontSize="13px"
          onClick={handleToggleRange}
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          Range
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Box display="flex" alignItems="start">
          <Box>
            <Box display="flex" color="#1B2F39" fontSize="20px">
              {parseFloat(item.charging_speed)}{" "}
              <Box mt="4px" fontSize="16px" ml="2px">
                kW
              </Box>
            </Box>
            <Box display="flex">
              {Array(4)
                .fill()
                .map((v, i) => (
                  <Square
                    key={i}
                    selected={
                      getMaxChargeRate(parseFloat(item.charging_speed)) > i
                    }
                  />
                ))}
            </Box>
          </Box>
          <Box
            mt={0.5}
            ml="23px"
            display="flex"
            flexGrow={1}
            alignItems="start"
            justifyContent="flex-end"
            color="#A4A4A4"
            fontSize={{ xs: "13px", md: "14px" }}
            lineHeight="100%"
          >
            <Box
              component="img"
              mr={0.75}
              src={deliveryIcon}
              width={{ xs: 18, md: 20 }}
              height={{ xs: 18, md: 20 }}
              alt=""
            />{" "}
            {item.estimated_delivery}
          </Box>
        </Box>
        <Box
          mt="2px"
          display="flex"
          color="#A4A4A4"
          fontSize="13px"
          onClick={handleChargingSpeed}
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          Max charging speed
        </Box>
      </Box>
      {openRange && (
        <RangeModal open title="Range" onClose={handleToggleRange} />
      )}
      {openChargingSpeed && (
        <MaxChargingSpeedModal onClose={handleChargingSpeed} />
      )}
    </Box>
  );
}
