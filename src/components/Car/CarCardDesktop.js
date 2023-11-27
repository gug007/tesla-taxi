import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import deliveryIcon from "../../icons/delivery-icon.svg";
import getCarTitle from "../../utils/getCarTitle";
import PriceDetailsModal from "./PriceDetailsModal";

export default function CarCardDesktop({ item }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  return (
    <Box mt="309px">
      <Box
        bgcolor="white"
        mt="13px"
        borderRadius="20px"
        p="35px"
        border="1px solid #D9D9D9"
        boxShadow="0px 32px 67px rgba(0, 0, 0, 0.05)"
      >
        <Box display="flex" justifyContent="center">
          <Box display="inline-block">
            <Typography fontSize="16px" color="#171717">
              From
            </Typography>
            <Box
              mt={-0.5}
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
            >
              <Typography
                fontSize="49px"
                color="#333333"
                lineHeight="100%"
                sx={{
                  letterSpacing: "-0.045em",
                }}
              >
                {parseFloat(item.monthly_price)}
              </Typography>
              <Typography
                mb={0.5}
                fontSize="16px"
                color="rgba(23, 23, 23, 0.49)"
              >
                /mo
              </Typography>
            </Box>
            <Typography
              align="center"
              fontSize="16px"
              color="#1D323D"
              sx={{
                textDecoration: "underline",
                textUnderlineOffset: "2px",
                cursor: "pointer",
              }}
              onClick={handleToggle}
            >
              Before tax and fees
            </Typography>
            {open && <PriceDetailsModal item={item} onClose={handleToggle} />}
          </Box>
        </Box>
        <Box
          align="center"
          display="flex"
          justifyContent="center"
          mt="33px"
          px="30px"
        >
          <Box
            height={125}
            overflow="hidden"
            display="flex"
            alignItems="center"
          >
            <img style={{ width: 318 }} src={item?.primary_image?.url} alt="" />
          </Box>
        </Box>
        <Typography
          align="center"
          fontSize="31px"
          mt="20px"
          fontWeight={700}
          letterSpacing="-0.04em"
        >
          {getCarTitle(item)}
        </Typography>
        <Typography align="center" color="#565656" fontSize="13px">
          Only takes 1-2 min
        </Typography>
        <Box mt="30px">
          <Button
            to="/questions"
            component={Link}
            sx={{
              height: 72,
              minWidth: 300,
              border: "1px solid #1B2F39",
              color: "white",
              background: "#1B2F39",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              borderRadius: "12px",
              ":hover": {
                border: "1px solid #1B2F39",
                color: "white",
                background: "#1B2F39",
              },
              ":active": {
                border: "1px solid #111E24",
                color: "white",
                background: "#111E24",
              },
            }}
            fullWidth
          >
            Get this deal
          </Button>
          <Box
            mt="24px"
            mb="3px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#565656"
            variant="body2"
          >
            <Box
              mx={1}
              component="img"
              mr={0.75}
              src={deliveryIcon}
              width={25}
              height={25}
              alt=""
            />{" "}
            {item.estimated_delivery}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
