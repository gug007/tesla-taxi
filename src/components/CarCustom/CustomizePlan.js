import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";

import ToggleButton from "./ToggleButton";
import CarColors from "../Car/colors/CarColors";
import CustomizeTabs from "./CustomizeTabs";
import track from "../../icons/track.svg";
import ExtraMilesModal from "../Car/Modals/ExtraMilesModal";
import { useCarCustomSetting } from "../../state/car-custom-settings";
import { formatCurrency } from "../../utils/currency";
import { getLeaseDetail } from "../../utils/car";

export default function CustomizePlan({ item }) {
  const [open, setOpen] = useState(false);
  const [openExtraMiles, setOpenExtraMiles] = useState(false);
  const { id } = useParams();
  const { settings } = useCarCustomSetting();
  const reserveLink = `/reserve?id=${id}&lease_length=${settings.leaseLength}`;
  const lease = getLeaseDetail(item, settings.leaseLength);

  const handleToggleExtraMiles = () => {
    setOpenExtraMiles((v) => !v);
  };

  return (
    <Box>
      <Box
        mt={{ xs: "20px", md: "82px" }}
        p="20px"
        border="1px solid #D1D1D1"
        bgcolor="white"
        boxShadow="0px 9px 51px rgba(0, 0, 0, 0.11)"
        borderRadius="14px"
      >
        <Typography textAlign="center" fontSize="20px" fontWeight={700}>
          Your custom package
        </Typography>
        <Box mt={1} display="flex" justifyContent="center">
          <CarColors colors={item?.colors} />
        </Box>
        <Typography
          mt="13px"
          textAlign="center"
          variant="body2"
          fontWeight={500}
          lineHeight="140%"
          letterSpacing="-0.03em"
        >
          Pick your lease length
        </Typography>
        <CustomizeTabs />
        <Box mx="30px" mt={5} borderTop="1px solid #CFCDCD" />
        <Typography
          mt={4}
          align="center"
          variant="body2"
          fontWeight={700}
          letterSpacing="-0.05em"
        >
          Your monthly use fee
        </Typography>
        <Box
          mt={0.5}
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Typography
            display="inline"
            fontWeight={700}
            variant="h3"
            letterSpacing="-0.05em"
            lineHeight="100%"
          >
            ${parseFloat(lease.monthly_payment)}
          </Typography>
          <Typography
            mt={1.5}
            mb="2px"
            display="inline"
            align="center"
            fontSize="10px"
          >
            /mo
          </Typography>
        </Box>
        <Typography
          mt={0.5}
          align="center"
          fontSize="10px"
          color="#1D323D"
          lineHeight="100%"
        >
          Before taxes & fees
        </Typography>
        <Typography
          mt="30px"
          align="center"
          variant="body2"
          fontWeight={500}
          letterSpacing="-0.05em"
        >
          Due at signing
        </Typography>
        <Typography
          align="center"
          variant="h5"
          fontWeight={700}
          letterSpacing="-0.05em"
          color="#1B2F39"
        >
          ${parseFloat(lease.total_due_at_signing)}
        </Typography>
        <Box mt="15px" display="flex" justifyContent="center">
          <ToggleButton open={open} onToggle={setOpen} />
        </Box>
        {open && (
          <>
            <Box mt="30px" display="flex" justifyContent="space-between">
              <Typography variant="body2">Monthly use fee</Typography>
              <Typography variant="body2">
                ${formatCurrency(lease.monthly_payment)}
              </Typography>
            </Box>
            <Box mt="20px" display="flex" justifyContent="space-between">
              <Typography variant="body2">Tax</Typography>
              <Typography variant="body2">
                ${formatCurrency(lease.monthly_taxes)}
              </Typography>
            </Box>
            <Box mt="20px" display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="body2" fontWeight={700}>
                  Minimum monthly payment
                </Typography>
                {/*
                  <Box color="#8A8A8A" fontSize="14px">
                  Plus{" "}
                  <span
                    onClick={handleToggleExtraMiles}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    extra miles
                  </span>
                  , after{" "}
                  {
                    item.comparison_table.data.attributes.monthly_miles_included
                      .zevvy
                  }{" "}
                  mi free
                </Box>
                */}
              </Box>
              <Typography variant="body2" fontWeight={700}>
                ${formatCurrency(lease.monthly_total)}
              </Typography>
            </Box>
            {openExtraMiles && (
              <ExtraMilesModal
                freeMileage={lease.miles_included}
                extraMiles={lease.price_per_mile}
                onClose={handleToggleExtraMiles}
              />
            )}
            <Box mt="20px" borderBottom="1px solid rgba(0, 0, 0, 0.11)" />
            <Box mt="30px" display="flex" justifyContent="space-between">
              <Typography variant="body2">Upfront payment</Typography>
              <Typography variant="body2">
                ${formatCurrency(lease.upfront_payment)}
              </Typography>
            </Box>
            <Box mt="20px" display="flex" justifyContent="space-between">
              <Typography fontSize="13px" color="#737373">
                Acquisition fee
              </Typography>
              <Typography fontSize="13px" color="#737373">
                ${formatCurrency(lease.acquisition_fee)}
              </Typography>
            </Box>
            <Box mt="10px" display="flex" justifyContent="space-between">
              <Typography fontSize="13px" color="#737373">
                Down payment
              </Typography>
              <Typography fontSize="13px" color="#737373">
                ${formatCurrency(lease.additional_down_payment)}
              </Typography>
            </Box>
            {/*<Box mt="10px" display="flex" justifyContent="space-between">
              <Typography fontSize="13px" color="#737373">
                Reservation fee
              </Typography>
              <Typography fontSize="13px" color="#737373">
                -${formatCurrency(lease.reservation_fee)}
              </Typography>
            </Box>*/}
            <Box mt="20px" display="flex" justifyContent="space-between">
              <Typography variant="body2">Monthly use fee</Typography>
              <Typography variant="body2">
                ${formatCurrency(lease.monthly_payment)}
              </Typography>
            </Box>
            <Box mt="20px" display="flex" justifyContent="space-between">
              <Typography variant="body2">Tax</Typography>
              <Typography variant="body2">
                ${formatCurrency(lease.total_taxes)}
              </Typography>
            </Box>
            <Box
              mt="20px"
              mb="20px"
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="body2" fontWeight={700}>
                Due at signing
              </Typography>
              <Typography variant="body2" fontWeight={700}>
                ${formatCurrency(lease.total_due_at_signing)}
              </Typography>
            </Box>
          </>
        )}
        <Hidden mdDown>
          <Box mx="30px" mt="30px">
            <Button
              component={Link}
              to={reserveLink}
              variant="outlined"
              color="inherit"
              fullWidth
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
        </Hidden>
      </Box>
      <Hidden mdDown>
        <Box display="flex" mt="6px" justifyContent="center">
          <Box mt="15px" display="flex" color="#1D323D" variant="body2">
            <Box
              component="img"
              mt={0.2}
              mr={0.5}
              src={track}
              width={16}
              height={16}
              alt=""
            />{" "}
            Pick it up in 2 weeks
          </Box>
        </Box>
      </Hidden>
    </Box>
  );
}
