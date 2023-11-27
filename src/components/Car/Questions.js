import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Questions() {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} md={7}>
          <Box my="40px">
            <Box
              position="relative"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #E2E2E2"
              borderRadius="30px"
            >
              <Box
                top="-44px"
                left="-50px"
                position="absolute"
                bgcolor="#FECEEE"
                width="130.8px"
                height="97.47px"
                sx={{
                  filter: "blur(17.5px)",
                  transform: "matrix(0.9, -0.43, 0.37, 0.93, 0, 0)",
                }}
              />
              <Box
                bottom="-13px"
                right="-33px"
                position="absolute"
                bgcolor="#73E5FF"
                width="82.45px"
                height="69.72px"
                sx={{
                  filter: "blur(17.5px)",
                  transform: "matrix(0.96, 0.27, -0.17, 0.99, 0, 0)",
                }}
              />
              <Box mx="50px" mt="30px" mb="20px">
                <Typography align="center" variant="body2" fontWeight={700}>
                  Did you know you can buy your EV when your lease is up?
                </Typography>
                <Typography mt="12px" align="center" fontSize="13px">
                  Here’s another special Zevvy feature: you'll build equity in
                  your EV as you drive! Every mile you pay for is deducted from
                  the purchase price.
                </Typography>
              </Box>
            </Box>
            <Box
              mt="28px"
              position="relative"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #E2E2E2"
              borderRadius="30px"
            >
              <Box
                top="-44px"
                left="-50px"
                position="absolute"
                bgcolor="#73E5FF"
                width="130.8px"
                height="97.47px"
                sx={{
                  filter: "blur(17.5px)",
                  transform: "matrix(0.9, -0.43, 0.37, 0.93, 0, 0)",
                }}
              />
              <Box
                bottom="-33px"
                right="-43px"
                position="absolute"
                bgcolor="#FECEEE"
                width="82.45px"
                height="69.72px"
                sx={{
                  filter: "blur(17.5px)",
                  transform: "matrix(0.96, 0.27, -0.17, 0.99, 0, 0)",
                }}
              />
              <Box mx="50px" mt="40px" mb="35px">
                <Typography align="center" variant="body2" fontWeight={700}>
                  Have more questions?{" "}
                </Typography>
                <Box mt="12px" align="center">
                  <Box
                    component="a"
                    href="https://www.zevvy.com/faq"
                    color="black"
                    display="inline"
                    fontSize="13px"
                    sx={{
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Check out our FAQs
                  </Box>{" "}
                  <Typography display="inline" fontSize="13px">
                    or
                  </Typography>{" "}
                  <Typography
                    component="a"
                    href="https://www.zevvy.com/contact-us"
                    color="black"
                    display="inline"
                    fontSize="13px"
                    sx={{
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    contact us.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
