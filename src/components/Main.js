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
        <Container>
          <Box mt="69px">
            <Typography
              variant="h3"
              fontSize={{ md: "61px" }}
              lineHeight={{ xs: "100%", md: "140%" }}
              fontWeight={700}
              letterSpacing="-0.05em"
            >
              {t("Rent Tesla with driver in Armenia")}
            </Typography>
          </Box>
          <Box mb={3} mt={{ xs: 3, sm: 0 }}>
            <img
              style={{ maxWidth: "100%" }}
              alt=""
              src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&"
            />
          </Box>
        </Container>
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
            <TelegramIcon sx={{fontSize: 50}} htmlColor="#caf0f8" />
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
