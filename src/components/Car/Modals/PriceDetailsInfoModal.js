import React, { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "../../../Modal";
import TaxesApproxModal from "./TaxesApproxModal";
import DueAtSigningModal from "./DueAtSigningModal";
import ExtraMilesModal from "./ExtraMilesModal";
import { formatCurrency } from "../../../utils/currency";
import { getLeaseDetail } from "../../../utils/car";

export default function PriceDetailsInfoModal({ item, onClose }) {
  const [openTaxes, setOpenTaxes] = useState(false);
  const [openDueAtSigning, setOpenDueAtSigning] = useState(false);
  const [openExtraMiles, setOpenExtraMiles] = useState(false);
  const details = item.price_details;
  const lease = getLeaseDetail(item, 6);

  const handleToggleTaxes = () => {
    setOpenTaxes((v) => !v);
  };

  const handleToggleDueAtSigning = () => {
    setOpenDueAtSigning((v) => !v);
  };

  const handleToggleExtraMiles = () => {
    setOpenExtraMiles((v) => !v);
  };

  return openExtraMiles ? (
    <ExtraMilesModal
      freeMileage={lease.miles_included}
      extraMiles={lease.price_per_mile}
      onClose={handleToggleExtraMiles}
    />
  ) : openDueAtSigning ? (
    <DueAtSigningModal item={item} onClose={handleToggleDueAtSigning} />
  ) : openTaxes ? (
    <TaxesApproxModal item={item} onClose={handleToggleTaxes} />
  ) : (
    <Modal open title="Price details" onClose={onClose}>
      <Box mx="29px" mt="32px">
        <Box display="flex" justifyContent="space-between">
          <Box>Monthly use fee</Box>
          <Box>${parseFloat(item.monthly_price)}</Box>
        </Box>
        <Box mt="19px" display="flex" justifyContent="space-between">
          <Box>
            Taxes (
            <span
              onClick={handleToggleTaxes}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              approx.
            </span>
            )
          </Box>
          <Box>${details.taxes}</Box>
        </Box>
        <Box mt="19px" display="flex" justifyContent="space-between">
          <Box>
            <Box fontWeight={700}>Minimum monthly payment </Box>
            <Box color="#8A8A8A">
              Plus{" "}
              <span
                onClick={handleToggleExtraMiles}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                extra miles
              </span>
              , after{" "}
              {formatCurrency(
                item.comparison_table.data.attributes.monthly_miles_included
                  .zevvy
              )}{" "}
              mi free
            </Box>
          </Box>
          <Box fontWeight={700}>${item.monthly_price + details.taxes}</Box>
        </Box>
        <Box mt="32px" display="flex" justifyContent="space-between">
          <Box fontWeight={700}>Due at signing</Box>
          <Box>
            <Box textAlign="right" fontWeight={700}>
              From ${details.total_due_at_signing}
            </Box>
            <Box
              textAlign="right"
              fontWeight={400}
              width={120}
              style={{ cursor: "pointer", textDecoration: "underline" }}
              color="#8A8A8A"
              onClick={handleToggleDueAtSigning}
            >
              Calculated in next step
            </Box>
          </Box>
        </Box>
        <Box mt="20px" />
      </Box>
    </Modal>
  );
}
