import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function Modal({ open, title, children, onClose }) {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        ".MuiDialog-container": {
          xs: { alignItems: "flex-end" },
          md: { alignItems: "center" },
        },
        ".MuiDialog-paper": {
          xs: { width: "100%", margin: 0, borderRadius: "19px 19px 0 0" },
          md: { width: "100%", margin: 0, borderRadius: "19px" },
        },
      }}
    >
      <Box
        px="18px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        minHeight="52px"
        sx={{ border: "1px solid rgba(0, 0, 0, 0.07)" }}
      >
        <Box>
          <IconButton sx={{ mr: "-20px" }} onClick={onClose}>
            <HighlightOffIcon htmlColor="#E9E9E9" />
          </IconButton>
        </Box>
        <Box fontSize="16px" fontWeight={500}>
          {title}
        </Box>
        <Box />
      </Box>
      {children}
    </Dialog>
  );
}
