import React, { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "../../Modal";
import PriceDetailsInfoModal from "./Modals/PriceDetailsInfoModal";

export default function PriceDetailsModal({ item, onClose }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  if (open) {
    return (
      <Modal open={open} title="Upfront fee" onClose={handleToggle}>
        <Box mx="29px" my="20px">
          <ul
            style={{
              listStylePosition: "outside",
              paddingInlineStart: 0,
              marginLeft: 20,
            }}
          >
            <li>
              Your upfront fee depends on the tax incentives you qualify for.
            </li>
            <li>You can customize upfront fee after you apply.</li>
            <li>
              One-time fee to cover the various costs associated with getting
              you an EV.
            </li>
          </ul>
        </Box>
      </Modal>
    );
  }

  return <PriceDetailsInfoModal item={item} onClose={onClose} />;
}
