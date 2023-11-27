import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";

import logo from "../../icons/logo.svg";
import user from "../../icons/user.svg";
import LoginModal from "../Auth/Login/LoginModal";

export default function HeaderDesktop({ hiddenBorderBottom }) {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);

  const toggleLogin = () => {
    setOpenLogin((v) => !v);
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        py="20px"
        borderBottom={
          hiddenBorderBottom ? undefined : "1px solid rgba(0, 0, 0, 0.05)"
        }
      >
        <ButtonBase onClick={() => navigate("/")}>
          <img height={35} src={logo} alt="" />
        </ButtonBase>
        <Box display="flex" alignItems="center" color="#1B1B1B">
          <Box mr={4} variant="body2" fontWeight={700}>
            How it works
          </Box>
          <Box mr={4} variant="body2">
            About us
          </Box>
          <Box mr={4} variant="body2">
            EV resources
          </Box>
          <Box variant="body2">Contact us</Box>
        </Box>
        <Button
          variant="outlined"
          color="inherit"
          onClick={toggleLogin}
          sx={{
            textTransform: "none",
            border: "1px solid #9499A4",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          <Box component="img" width={22} src={user} mr={2} />
          Sign in
        </Button>
      </Box>
      <LoginModal open={openLogin} onClose={toggleLogin} />
    </Container>
  );
}
