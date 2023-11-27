import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ToggleButton({ open, onToggle }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      px="17px"
      py="8px"
      border="1px solid rgba(27, 47, 57, 0.28)"
      borderRadius="20px"
      sx={{ cursor: "pointer" }}
      onClick={() => onToggle((v) => !v)}
      color="#1B2F39"
      fontSize="13px"
      fontWeight={700}
    >
      {open ? "See less" : "See more"}{" "}
      {open ? (
        <ArrowForwardIosIcon
          sx={{ ml: 1, fontSize: "14px", transform: "rotate(270deg)" }}
        />
      ) : (
        <ArrowForwardIosIcon
          sx={{ ml: 1, fontSize: "14px", transform: "rotate(90deg)" }}
        />
      )}
    </Box>
  );
}
