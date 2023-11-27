import Box from "@mui/material/Box";

import deliveryIcon from "../../icons/delivery-icon.svg";
import CarImagesList from "./CarImagesList";

export default function CarImages({ item, image, onChange }) {
  return (
    <>
      <Box display="flex" justifyContent="center" mt="33px">
        {/* <img src="/images/car-details.png" alt=""/>   */}
        <Box height={125} overflow="hidden" display="flex" alignItems="center">
          <img
            style={{ width: 318 }}
            src={item.vehicle_images[image].data.attributes.url}
            alt=""
          />
        </Box>
      </Box>
      <Box display="flex" mt="6px" justifyContent="flex-end">
        <Box
          mt="6px"
          display="flex"
          alignItems="center"
          color="#666666"
          fontSize="13px"
        >
          <Box
            component="img"
            mr={0.75}
            src={deliveryIcon}
            width={18}
            height={18}
            alt=""
          />{" "}
          {item.estimated_delivery}
        </Box>
      </Box>
      <CarImagesList
        selected={image}
        images={item.vehicle_images}
        onChange={onChange}
      />
    </>
  );
}
