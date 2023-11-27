import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EmptyPage({ onEditFilters }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box display="flex" flexDirection="column" flexGrow={1} bgcolor="#F2F2F2">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        flexGrow={1}
      >
        <img width={208} src="/images/empty-cars.png" alt="" />
        <Typography mt="38px" fontSize="20px" fontWeight={700}>
          No results
        </Typography>
        <Typography mt="14px" variant="body2" color="#999FAE">
          Try adjusting your filters.
        </Typography>
      </Box>
      <Box bgcolor="#FDFEFF" py="16px">
        <Container>
          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            <Button
              onClick={onEditFilters}
              fullWidth={isMobile}
              variant="outlined"
              size="large"
              sx={{
                minWidth: 300,
                height: 58,
                border: "1px solid #1B2F39",
                color: "white",
                background: "#1B2F39",
                textTransform: "none",
                fontSize: "13px",
                borderRadius: isMobile ? undefined : "12px",
                ":hover": {
                  border: "1px solid #1B2F39",
                  color: "white",
                  background: "#1B2F39",
                },
                ":active": {
                  border: "1px solid #111E24",
                  color: "white",
                  background: "#111E24",
                },
              }}
            >
              Edit Filters
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
