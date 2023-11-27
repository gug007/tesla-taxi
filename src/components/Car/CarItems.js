import Box from "@mui/material/Box";

import done from "../../icons/done.svg";

const iconSize = { xs: "17px", md: "22px" };

export default function CarItems() {
  return (
    <Box
      display
      mt={{ xs: "29px", md: "98px" }}
      color="#1D323D"
      fontSize={{ xs: "13px", md: "22px" }}
    >
      <Box>
        <Box
          width={iconSize}
          height={iconSize}
          component="img"
          src={done}
          mb="-3px"
          mr={{ xs: 1, md: "19px" }}
        />
        Customizable lease length, starting at just 6 months
      </Box>
      <Box mt={1.5}>
        <Box
          width={iconSize}
          height={iconSize}
          component="img"
          src={done}
          mb="-3px"
          mr={{ xs: 1, md: "19px" }}
        />
        1,000 monthly miles included and no mileage caps
      </Box>
      <Box display="flex" mt={1.5}>
        <Box>
          <Box
            width={iconSize}
            height={iconSize}
            component="img"
            src={done}
            mb="-3px"
            mr={{ xs: 1, md: "19px" }}
          />
        </Box>
        Option to renew, return, or purchase
      </Box>
    </Box>
  );
}
