import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import { textFontSize } from "./Main";

export default function Prices() {
  const { t } = useTranslation();
  return (
    <Container>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography mt={2} fontSize={textFontSize} align="center">
              1 {t("hour")} <DragHandleIcon color="action" sx={{ mb: -0.7 }} />{" "}
              6,000 dram
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography mt={2} fontSize={textFontSize} align="center">
              1 {t("day")} <DragHandleIcon color="action" sx={{ mb: -0.7 }} />{" "}
              40,000 dram
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
