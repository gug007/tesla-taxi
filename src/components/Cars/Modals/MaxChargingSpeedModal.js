import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "../../../Modal";

export default function MaxChargingSpeedModal({ onClose }) {
  return (
    <Modal open title="Max charging speed" onClose={onClose}>
      <Box mx="29px" my="20px">
        <Typography variant="body2">
          If you can charge at home or work, then you'll be set driving any EV.
          If you will depend on public charging or take a lot of road trips, a
          vehicle with a 3+ rating is ideal.
        </Typography>
      </Box>
    </Modal>
  );
}
