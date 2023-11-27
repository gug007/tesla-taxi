import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "../../../Modal";

export default function RangeModal({ onClose }) {
  return (
    <Modal open title="Range" onClose={onClose}>
      <Box mx="29px" my="20px">
        <Typography variant="body2">
          EPA range estimates can vary widely depending on driving style,
          terrain, and weather. Assume you'll get about 50 miles more in the
          city and 50 miles less on the highway.
        </Typography>
      </Box>
    </Modal>
  );
}
