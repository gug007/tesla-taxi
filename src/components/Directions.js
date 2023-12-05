import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { textFontSize } from "./Main";

function PriceLabel({ number }) {
  return (
    <Box ml={1.5} color="#4caf50">
      {new Intl.NumberFormat().format(number * 6000)} dram
    </Box>
  );
}

export default function Directions() {
  const { t } = useTranslation();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            Zvartnots{" "}
            <ArrowForwardIosIcon color="action" sx={{ mt: 0.5, mx: 1 }} />{" "}
            Kentron <PriceLabel number={1} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            Yerevan{" "}
            <ArrowForwardIosIcon color="action" sx={{ mt: 0.5, mx: 1 }} />{" "}
            Tsaghkadzor <PriceLabel number={2} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            Yerevan{" "}
            <ArrowForwardIosIcon color="action" sx={{ mt: 0.5, mx: 1 }} />{" "}
            Dilijan <PriceLabel number={4} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" fontSize={textFontSize}>
            Yerevan{" "}
            <ArrowForwardIosIcon color="action" sx={{ mt: 0.5, mx: 1 }} />{" "}
            Tbilisi <PriceLabel number={10} />
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
