import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "../../../Modal";

export default function DueAtSigningModal({ onClose }) {
  return (
    <Modal open title="Due at signing" onClose={onClose}>
      <Box mx="29px" my="20px">
        <Typography variant="body2">
          The total due at signing will vary depending on the term selected,
          your local tax rate, and any manufacturer, dealer, and/or government
          incentives for which you may be eligible.
        </Typography>
      </Box>
    </Modal>
  );
}
