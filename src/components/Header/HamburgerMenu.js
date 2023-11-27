import React, { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Dialog from "@mui/material/Dialog";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";

import menuIcon from "../../icons/menu.svg";
import logo from "../../icons/logo.svg";
import aboutUsIcon from "./icons/about-us.svg";
import evResourcesIcon from "./icons/ev-resources.svg";
import howItWorksIcon from "./icons/how-it-works.svg";
import loginIcon from "./icons/login.svg";
import phoneImage from "./icons/phone.png";
import LoginModal from "../Auth/Login/LoginModal";

const colors = {
  light: {
    logo: <img src={menuIcon} alt="" />,
  },
  dark: {
    logo: (
      <svg
        width="27"
        height="19"
        viewBox="0 0 27 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="27" height="3" rx="1.5" fill="#fff" />
        <rect y="8" width="27" height="3" rx="1.5" fill="#fff" />
        <rect y="16" width="22" height="3" rx="1.5" fill="#fff" />
      </svg>
    ),
  },
};

export default function HamburgerMenu({ theme }) {
  const [menu, setMenu] = useState();
  const [openLogin, setOpenLogin] = useState();

  const toggleMenu = () => {
    setMenu((v) => !v);
  };

  const toggleLogin = () => {
    setOpenLogin((v) => !v);
  };

  if (openLogin) {
    return (
      <LoginModal
        open={openLogin}
        onClose={() => {
          toggleLogin();
          toggleMenu();
        }}
      />
    );
  }

  return (
    <>
      <ButtonBase onClick={toggleMenu}>{colors[theme].logo}</ButtonBase>
      {menu && (
        <Dialog
          sx={{
            height: "100vh",
            left: "auto",
            right: 0,
            top: 0,
            ".MuiDialog-container": {
              alignItems: "flex-start",
            },
            ".MuiDialog-paper": {
              top: 0,
              width: 260,
              margin: 0,
              height: "100%",
            },
          }}
          onClose={toggleMenu}
          open={menu}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            p="20px"
            pt="26px"
            sx={{ border: "1px solid rgba(0, 0, 0, 0.07)" }}
          >
            <img src={logo} alt="" />
            <Box>
              <ButtonBase sx={{ ml: "-10px" }} onClick={toggleMenu}>
                <HighlightOffIcon
                  sx={{ fontSize: "27px" }}
                  htmlColor="#E9E9E9"
                />
              </ButtonBase>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Box pt={4}>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: 2.5 }}>
                      <img src={howItWorksIcon} alt="" />
                    </ListItemIcon>
                    <Typography
                      ml={2}
                      color="#717171"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      How it works
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: 2.5 }}>
                      <img src={aboutUsIcon} alt="" />
                    </ListItemIcon>
                    <Typography
                      ml={2}
                      color="#717171"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      About us
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: 2.5 }}>
                      <img src={evResourcesIcon} alt="" />
                    </ListItemIcon>
                    <Typography
                      ml={2}
                      color="#717171"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      EV resources
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={toggleLogin}>
                    <ListItemIcon sx={{ minWidth: 2.5 }}>
                      <img src={loginIcon} alt="" />
                    </ListItemIcon>
                    <Typography
                      ml={2}
                      color="#717171"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      Log in
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box mx="20px" mb="30px" borderRadius="16px" bgcolor="#F3F3F3">
              <Box mt={3} display="flex" justifyContent="center">
                <img width={80} src={phoneImage} alt="" />
              </Box>
              <Typography mt={1} align="center" color="#727272" fontSize="10px">
                Need assistance?
                <br />
                Email support@zevvy.com or
                <br /> click below to give us a ring.
              </Typography>
              <Box mt={1} p="13px">
                <Button
                  fullWidth
                  component="a"
                  href="tel:415-555-1212"
                  sx={{
                    letterSpacing: "-0.04em",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 700,
                    height: "56px",
                    background: "#1D323D",
                    color: "#73E5FF",
                    borderRadius: "12px",
                    ":hover": {
                      background: "#1D323D",
                      color: "#73E5FF",
                    },
                  }}
                >
                  Call us
                </Button>
              </Box>
            </Box>
          </Box>
        </Dialog>
      )}
    </>
  );
}
