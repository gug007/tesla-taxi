import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

 import lock from "../../Header/icons/lock.svg";
import HeaderMobile from "../../Header/HeaderMobile";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

export default function LoginModal({ open, onClose }) {
  const [openForgot, setOpenForgot] = useState();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const methods = useForm({ defaultValues: {} });
  const { handleSubmit } = methods;

  const toggleForgot = () => {
    setOpenForgot((v) => !v);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  if (openForgot) {
    return (
      <ForgotPassword
        open={openForgot}
        onClose={() => {
          toggleForgot();
          onClose();
        }}
      />
    );
  }

  return (
    <Dialog
      fullScreen={isMobile}
      maxWidth="lg"
      sx={{
        p: 0,
        ".MuiDialog-paper": {
          borderRadius: { md: "20px" },
        },
      }}
      onClose={onClose}
      open={open}
    >
      <Hidden mdDown>
        <Box mt="29px" mx="47px" display="flex" justifyContent="space-between">
          <IconButton
            sx={{ boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.1)" }}
            onClick={onClose}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Typography fontWeight={700} fontSize="20px">
            Login
          </Typography>
          <Box width={50} />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <HeaderMobile onClickHome={onClose} theme="light" />
      </Hidden>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        width={{ md: 440 }}
        mx={{ md: "100px" }}
      >
        <Box px={2.5} pt={{ xs: "100px", md: "80px" }}>
          <Typography variant="body2" fontWeight={700} color="#616161">
            New to Zevvy?{" "}
            <Box
              display="inline"
              color="#73E5FF"
              component={Link}
              to="/cars-custom"
              sx={{
                textDecoration: "none",
              }}
            >
              Choose a car to get started.
            </Box>
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>

              <Box mt={1} display="flex" justifyContent="flex-end">
                <Box
                  mt={1}
                  component={ButtonBase}
                  align="right"
                  color="rgba(41, 41, 48, 0.30)"
                  fontSize="14px"
                  onClick={toggleForgot}
                >
                  Forgot password?
                </Box>
              </Box>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: "59px",
                  letterSpacing: "-0.04em",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  height: "72px",
                  background: "#1D323D",
                  color: "#fff",
                  borderRadius: "12px",
                  ":hover": {
                    background: "#1D323D",
                    color: "#fff",
                  },
                }}
              >
                Continue
              </Button>
              <Box display="flex" mt="25px" mb={{ xs: "25px", md: "70px" }}>
                <Box mr={{ xs: "23px", md: 2 }} component="img" src={lock} />
                <Typography fontSize="13px" color="rgba(41, 41, 48, 0.30)">
                  All data is transmitted encrypted via a secure TLS connection
                </Typography>
              </Box>
            </form>
          </FormProvider>
        </Box>
      </Box>
    </Dialog>
  );
}
