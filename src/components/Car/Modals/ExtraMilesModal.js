import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "../../../Modal";
import { formatCurrency } from "../../../utils/currency";

export default function ExtraMilesModal({ freeMileage, extraMiles, onClose }) {
  return (
    <Modal open title="Extra miles" onClose={onClose}>
      <Box mx="29px" my="20px">
        <Typography variant="body2">
          Zevvy leases offer more generous mileage packages than traditional
          leases.
        </Typography>
        <Box mt="24px" display="flex" justifyContent="space-between">
          <Box>Monthly free mileage</Box>
          <Box>
            {formatCurrency(freeMileage)}
            mi
          </Box>
        </Box>
        <Box mt="14px" display="flex" justifyContent="space-between">
          <Box>Extra miles</Box>
          <Box>
            ${extraMiles}
            /mi
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
