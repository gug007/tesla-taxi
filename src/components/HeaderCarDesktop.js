import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import Link from "@mui/material/Link";

export default function HeaderCarDesktop({ item, hiddenBorderBottom }) {
  return (
    <Box
      top={0}
      zIndex={1}
      bgcolor="white"
      position="sticky"
      borderBottom={
        hiddenBorderBottom ? undefined : "1px solid rgba(0, 0, 0, 0.05)"
      }
    >
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py="20px"
          >
            <ButtonBase sx={{ fontSize: 22 }}>Tesla Taxi Armenia</ButtonBase>
            <Box display="flex" alignItems="center"></Box>
          </Box>
          <Link
            href="tel: +37498125020"
            sx={{
              fontSize: 18,
              textDecoration: "none",
            }}
          >
            +374 98 125020
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
