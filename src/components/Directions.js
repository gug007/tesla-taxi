import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { textFontSize } from "./Main";

export default function Directions() {
  const { t } = useTranslation();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            Kentron{" "}
            <ArrowForwardIosIcon color="action" sx={{ mt: 0.5, mx: 1 }} />{" "}
            Zvartnots
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            Yerevan{" "}
            <ArrowForwardIosIcon color="action" sx={{ mt: 0.5, mx: 1 }} />{" "}
            Tsaghkadzor
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            Yerevan{" "}
            <ArrowForwardIosIcon color="action" sx={{ mt: 0.5, mx: 1 }} />{" "}
            Dilijan
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            {t("or any other direction")}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
