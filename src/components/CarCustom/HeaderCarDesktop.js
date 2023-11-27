import { useNavigate, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import logo from "../../icons/logo.svg";
import { useCarCustomSetting } from "../../state/car-custom-settings";
import {getLeaseDetail} from "../../utils/car";

export default function HeaderCarDesktop({ item, to, hiddenBorderBottom }) {
  const navigate = useNavigate();
  const { settings } = useCarCustomSetting();
  const lease = getLeaseDetail(item, settings.leaseLength);

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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="20px"
        >
          <ButtonBase onClick={() => navigate("/")}>
            <img height={35} src={logo} alt="" />
          </ButtonBase>
          <Box display="flex" alignItems="center">
            <Box mr={4}>
              <Typography align="right" variant="body2" fontWeight={700}>
                {parseFloat(lease.monthly_payment)}/mo x{" "}
                {settings.leaseLength} months
              </Typography>
              <Typography align="right" fontSize="13px" mt={-0.55}>
                ${parseFloat(lease.total_due_at_signing)} due at
                signing
              </Typography>
              <Typography
                align="right"
                fontSize="10px"
                mt={-0.25}
                color="#1D323D"
              >
                Total before taxes
              </Typography>
            </Box>
            <Button
              component={Link}
              to={to}
              variant="outlined"
              color="inherit"
              sx={{
                px: "30px",
                height: 49,
                fontWeight: 500,
                border: "1px solid #1B2F39",
                color: "white",
                background: "#1B2F39",
                textTransform: "none",
                fontSize: "13px",
                borderRadius: "12px",
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
              Reserve
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
