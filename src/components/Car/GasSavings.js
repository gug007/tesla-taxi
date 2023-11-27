import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Modal from "../../Modal";

export default function GasSavings() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} md={7}>
          <Box mx="5px" mt="42px">
            <Typography variant="h5" fontSize={{ md: "48px" }} fontWeight={700}>
              It pays to go electric
            </Typography>
            <Typography variant="body2">It pays to go electric.</Typography>
            <Typography mt="24px" variant="body2" fontWeight={700}>
              Save hundreds on gas and maintenance
            </Typography>
            <Box>
              <Typography
                display="inline"
                mt={-0.5}
                variant="h2"
                fontWeight={400}
              >
                $1,500
              </Typography>
              <Typography
                display="inline"
                mt={-0.5}
                variant="body2"
                fontWeight={700}
              >
                /year
              </Typography>
            </Box>
            <Typography mt="24px" variant="body2">
              Estimated annual operating cost
            </Typography>
            <Box mt="7px" sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.23)" }}>
              <Box height="0px" />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                pl="23px"
                bgcolor="#D3D3D3"
                height="66px"
                sx={{ borderRadius: " 0px 8px 8px 0px" }}
              >
                <Typography fontWeight={700}>Gas Car</Typography>
                <Typography fontSize="12px">$3,326</Typography>
              </Box>
              <Box height="26px" />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                pl="23px"
                bgcolor="#1D323D"
                height="66px"
                width="42%"
                sx={{ borderRadius: " 0px 8px 8px 0px" }}
              >
                <Typography color="#F3F3F3" fontWeight={700}>
                  Electric Car
                </Typography>
                <Typography color="#F3F3F3" fontSize="12px">
                  $1,796
                </Typography>
              </Box>
              <Box height="27px" />
            </Box>
            <Typography
              mt="14px"
              variant="body2"
              sx={{ textDecoration: "underline", textUnderlineOffset: "2px" }}
              onClick={handleToggle}
            >
              See our assumptions
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {open && (
        <Modal open title="Our Assumptions" onClose={handleToggle}>
          <Box mx="29px" my="20px">
            <Typography variant="body2">
              Comparison is based on the average gas-powered car that achieves
              25.4 MPG, paying $4.50/gal, and having a maintenance cost of
              $0.10/mi and a battery electric vehicle that achieves 2.8 mi/kWh,
              paying $0.26/kWh, with an avearge maintenance cost of $0.06/mi,
              both driven 12,000 miles per year.
            </Typography>
          </Box>
        </Modal>
      )}
    </Container>
  );
}
