import React, { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "../../Modal";
import WhyDoINotQualifyModal from "./Modals/WhyDoINotQualifyModal";

export default function QualifyMessage() {
  const [open, setOpen] = useState(false);
  const [openQualify, setOpenQualify] = useState(false);

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  const handleToggleQualify = () => {
    setOpenQualify((v) => !v);
  };

  return (
    <>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        bgcolor="rgb(255, 255, 255, 0.7)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
      >
        <Box
          bgcolor="white"
          fontSize="12px"
          px="44px"
          mx="30px"
          py="20px"
          borderRadius="13px"
          lineHeight="17px"
          letterSpacing="-0.24px"
          align="center"
          color="#535353"
          sx={{ boxShadow: "1px 4px 8px rgba(0, 0, 0, 0.05)" }}
        >
          Sorry, we can’t qualify you for this car.{" "}
          <Box
            display="inline"
            sx={{ textDecorationLine: "underline" }}
            onClick={handleToggle}
          >
            Why?
          </Box>
        </Box>
      </Box>
      {openQualify ? (
        <WhyDoINotQualifyModal onClose={handleToggleQualify} />
      ) : (
        <Modal
          open={open}
          title="This vehicle may be outside your budget"
          onClose={handleToggle}
        >
          <Box mx="29px" my="20px" variant="body2">
          There are many factors that go into our decisioning process. Most
          importantly, we only approve applicants for vehicles that fit their
          budget.
          <br />
          <br />
          If you think that we made this decision in error, or have had positive
          changes with your personal finances, you are welcome to reapply in 30
          days.
          </Box>
        </Modal>
      )}
    </>
  );
}
