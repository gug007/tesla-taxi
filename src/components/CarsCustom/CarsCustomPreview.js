import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import HeaderMobile from "../Header/HeaderMobile";

export default function CarsCustomPreview() {
  return (
    <Box
      minHeight="100%"
      bgcolor="#1D323D"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        backgroundImage: "url(/images/welcome-overall.png)",
        backgroundPosition: "center 156px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box>
        <HeaderMobile theme="dark" />
        <Box pt="182px" display="flex" justifyContent="center">
          <Box mt="-82px">
            <img src="/images/cars-custom-preview.png" alt="" />
          </Box>
        </Box>
        <Container>
          <Box mx={3}>
            <Typography
              mt={-3}
              align="center"
              variant="h3"
              color="#F3F3F3"
              letterSpacing="-0.05em"
              lineHeight="100%"
            >
              Your deals are ready
            </Typography>
            <Typography mt={4} align="center" variant="body2" color="#c7c6c6">
              Based on your answers, these are cars that we think will fit your
              budget and lifestyle.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box mb="24px">
          <Button
            fullWidth
            component={Link}
            to="/cars-custom"
            sx={{
              letterSpacing: "-0.64px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "16px",
              height: "72px",
              background: "white",
              color: "#1D323D",
              borderRadius: "12px",
              ":hover": {
                background: "white",
                color: "#1D323D",
              },
            }}
          >
            See my deals
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
