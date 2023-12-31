import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";

import Header from "./Header";
import ViberIcon from "./ViberIcon.svg";
import { Divider } from "@mui/material";
import Prices from "./Prices";
import Directions from "./Directions";

const phoneNumber = "+37498125020";

export const textFontSize = { xs: 20, md: 24 };

export default function Main() {
  const { t } = useTranslation();
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Header />
        <Box
          display="flex"
          alignItems="space-between"
          mb={3}
          height={{ xs: "60vh", md: "80vh" }}
          overflow="hidden"
          sx={{
            backgroundImage: "url(/images/IMG_4186_1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <Box mt={3}>
              <Typography
                variant="h3"
                fontSize={{ md: "61px" }}
                lineHeight={{ xs: "100%", md: "140%" }}
                fontWeight={700}
                letterSpacing="-0.05em"
                sx={{
                  p: 1,
                  color: "white",
                  background: "rgba(0, 0, 0, 0.5)",
                  backgroundImage:
                    "linear-gradient(60deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
                }}
              >
                {t("Rent Tesla with driver in Armenia")}
              </Typography>
            </Box>
          </Container>
        </Box>
        <Directions />
        <Box mt={1} py={3}>
          <Divider />
        </Box>
        <Prices />
      </Box>
      <Box
        mt="38px"
        bgcolor="#1B2F39"
        pt={{ xs: "40px", md: "60px" }}
        pb={{ xs: "40px", md: "60px" }}
        color="white"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton href={`https://t.me/${phoneNumber}`}>
            <TelegramIcon sx={{ fontSize: 50 }} htmlColor="#caf0f8" />
          </IconButton>
          {/*<IconButton href={`https://wa.me/${phoneNumber}`}>
            <WhatsAppIcon htmlColor="	#dcf8c6"/>
          </IconButton>*/}
          <IconButton href={`viber://chat?number=${phoneNumber}`}>
            <img alt="" width={40} src={ViberIcon} />
          </IconButton>
          <Link
            href="tel: +37498125020"
            sx={{
              ml: 1,
              color: "white",
              fontSize: 18,
              textDecoration: "none",
            }}
          >
            +374 98 125020
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
