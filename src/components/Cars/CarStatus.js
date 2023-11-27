import Box from "@mui/material/Box";

const styles = {
  "Available Now": {
    border: "1px solid #74E5FF",
    bgcolor: "rgba(115, 229, 255, 0.1)",
    color: "#4DC8E4",
  },
  "Waitlist": {
    border: "1px solid #FECEEE",
    bgcolor: "rgba(254, 206, 238, 0.25)",
    color: "#ED9BD2",
  },
  "Reserve now": {
    border: "1px solid rgba(74, 87, 143, 0.39)",
    bgcolor: "rgba(74, 87, 143, 0.04)",
    color: "#4A578F",
  },
};

export default function CarStatus({ value }) {
  return (
    <Box
      p="10px"
      lineHeight="9px"
      fontSize="13px"
      borderRadius="22px"
      color="#4DC8E4"
      border="1px solid #74E5FF"
      bgcolor="rgba(115, 229, 255, 0.1)"
      {...styles[value]}
    >
      {value}
    </Box>
  );
}
