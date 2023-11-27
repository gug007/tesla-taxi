import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "../../../Modal";

export default function WhyDoINotQualifyModal({ onClose }) {
  return (
    <Modal open title="Why do I not qualify?" onClose={onClose}>
      <Box mx="29px" my="20px">
        <Typography variant="body2">
          There are many factors that go into our decisioning process. Most
          importantly, we only approve applicants for vehicles that fit their
          budget.
          <br />
          <br />
          If you think that we made this decision in error, or have had positive
          changes with your personal finances, you are welcome to reapply in 30
          days.
        </Typography>
      </Box>
    </Modal>
  );
}
