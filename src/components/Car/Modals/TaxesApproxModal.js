import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "../../../Modal";

export default function TaxesApproxModal({ onClose }) {
  return (
    <Modal open title="Taxes (approx.)" onClose={onClose}>
      <Box mx="29px" my="20px">
        <Typography variant="body2">
          We’ll customize this to your area after the next step.
        </Typography>
      </Box>
    </Modal>
  );
}
