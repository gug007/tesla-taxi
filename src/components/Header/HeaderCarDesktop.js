import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import logo from "../../icons/logo.svg";
import getCarTitle from "../../utils/getCarTitle";

export default function HeaderCarDesktop({ item, hiddenBorderBottom }) {
  const navigate = useNavigate();
  return (
    <Box
      top={0}
      zIndex={1}
      bgcolor="white"
      position="sticky"
      borderBottom={
        hiddenBorderBottom ? undefined : "1px solid rgba(0, 0, 0, 0.05)"
      }
    >
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="20px"
        >
          <ButtonBase sx={{fontSize: 22}} onClick={() => navigate("/")}>
            Tesla Taxi Armenia
          </ButtonBase>
          <Box display="flex" alignItems="center">

          </Box>
        </Box>
      </Container>
    </Box>
  );
}
