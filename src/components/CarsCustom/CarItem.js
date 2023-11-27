import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import CarStatus from "../Cars/CarStatus";
import CarPrice from "../Cars/CarPrice";
import CarDetails from "../Cars/CarDetails";

export default function CarItem() {
  const navigate = useNavigate();
  return (
    <Box
      borderRadius="10px"
      bgcolor="white"
      px="20px"
      pb="27px"
      pt="19px"
      onClick={() => navigate("/car-custom")}
    >
      <Box display="flex" justifyContent="space-between">
        <Box mt={1}>
          <CarStatus value="Available Now" />
        </Box>
        <CarPrice value="399" />
      </Box>
      <Box display="flex" justifyContent="center" mt="5px">
        <img src="/images/teslamodely.png" alt="" />
      </Box>
      <Box
        color="#1B2F39"
        fontSize="28px"
        letterSpacing="-0.05em"
        fontWeight={700}
        mt={0.5}
      >
        2023 Tesla Model Y
      </Box>
      <Box display="flex" color="#A4A4A4">
        <Box fontSize="13px">Standard Range Plus</Box>
        <Box px={1} fontSize="13px">
          |
        </Box>
        <Box fontSize="13px">Refurbished</Box>
      </Box>
      <CarDetails item={{ range: 100, charging_speed: 90 }} />
    </Box>
  );
}
