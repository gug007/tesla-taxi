import Typography from "@mui/material/Typography";

import getCarTitle from "../../utils/getCarTitle";
import CarCondition from "../Cars/CarCondition";

export default function CarTitle({ item }) {
  return (
    <Typography
      variant="h3"
      fontSize={{ md: "61px" }}
      lineHeight={{ xs: "100%", md: "140%" }}
      fontWeight={700}
      letterSpacing="-0.05em"
    >
      Rent Tesla with driver in Armenia
    </Typography>
  );
}
