import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Modal from "../../../Modal";

const description = {
  New: "You'll be the first person to drive this car!",
  "Like New":
    "This is an EV that is less than 12 months old and has less than 10,000 miles on it.",
  Refurbished:
    "This EV has received a multi-point inspection from a dealer partner and we guarantee the battery has at least 90% of its original capacity.",
};

export default function CarConditionModal({ value, onClose }) {
  return (
    <Modal open title={value} onClose={onClose}>
      <Box mx="29px" my="20px">
        <Typography variant="body2">{description[value]}</Typography>
      </Box>
    </Modal>
  );
}
