import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import getCarTitle from "../../utils/getCarTitle";
import CarStatus from "./CarStatus";
import CarPrice from "./CarPrice";
import CarDetails from "./CarDetails";
import CarCondition from "./CarCondition";

export default function CarItem({ url, car }) {
  const navigate = useNavigate();
  const item = car?.attributes || {};

  return (
    <Box
      borderRadius="10px"
      bgcolor="white"
      px="20px"
      pb="27px"
      pt="19px"
      onClick={() => navigate(`${url || ""}/${car.id}`)}
    >
      <Box display="flex" justifyContent="space-between">
        <Box mt={1}>
          <CarStatus value={item.availability} />
        </Box>
        <CarPrice value={item.monthly_price} />
      </Box>
      <Box display="flex" justifyContent="center" mt="5px">
        <Box height={108} overflow="hidden" display="flex" alignItems="center">
          <img
            style={{ width: 278 }}
            src={car?.attributes?.primary_image?.url}
            alt=""
          />
        </Box>
      </Box>
      <Box
        color="#1B2F39"
        fontSize="28px"
        letterSpacing="-0.05em"
        fontWeight={700}
        mt={0.5}
      >
        {getCarTitle(item)}
      </Box>
      <Box display="flex" color="#A4A4A4">
        <Box fontSize="13px">{item.trim}</Box>
        <Box px={1} fontSize="13px">
          |
        </Box>
        <CarCondition fontSize="13px">{item.condition}</CarCondition>
      </Box>
      <CarDetails item={item} />
    </Box>
  );
}
