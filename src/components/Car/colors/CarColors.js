/*
import Box from "@mui/material/Box";

import black from "./black.png";
import white from "./white.png";
import silver from "./silver.png";
import grey from "./grey.png";
import Tooltip from "./Tooltip";
import orderBy from "lodash/orderBy";

const allColors = {
  black: {
    order: 1,
    icon: (
      <Tooltip title="Black (+$50)">
        <Box
          mr="6px"
          width="24.83px"
          height="24.83px"
          component="img"
          src={black}
        />
      </Tooltip>
    ),
  },
  white: {
    order: 2,
    icon: (
      <Tooltip title="White (+$50)">
        <Box
          mr="6px"
          width="24.83px"
          height="24.83px"
          component="img"
          src={white}
        />
      </Tooltip>
    ),
  },
  silver: {
    order: 3,
    icon: (
      <Tooltip title="Silver (+$50)">
        <Box
          mr="6px"
          width="24.83px"
          height="24.83px"
          component="img"
          src={silver}
        />
      </Tooltip>
    ),
  },
  grey: {
    order: 4,
    icon: (
      <Tooltip title="Grey (+$50)">
        <Box
          mr="6px"
          width="24.83px"
          height="24.83px"
          component="img"
          src={grey}
        />
      </Tooltip>
    ),
  },
};
*/

export default function CarColors({ colors }) {
  return <div />;

  // Hide color selections (pushing this to v2)
  /*
  return (
    <Box display="flex" alignItems="center">
      <Box mr={0.5}>
        <Tooltip title="Any color (included)">
          <Box border="2px solid #73E5FF" p="2px" borderRadius="50%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="33.59px"
              height="33.59px"
              sx={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #F4F4F4 0deg, #FFFFFF 39.37deg, #282828 93.75deg, #1D1D1D 150deg, #B4B4B4 210deg, #EEEEEE 360deg)",
              }}
              borderRadius="50%"
            >
              <Box
                width="15.85px"
                height="15.85px"
                bgcolor="#FFFFFF"
                borderRadius="50%"
              />
            </Box>
          </Box>
        </Tooltip>
      </Box>
      <Box display="flex">
        {orderBy(colors, (v) => allColors[v].order).map((v) => (
          <Box key={v} display="flex" alignItems="center">
            {allColors[v].icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
   */
}
