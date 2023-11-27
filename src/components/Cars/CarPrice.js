import Box from "@mui/material/Box";

export default function CarPrice({ value }) {
  return (
    <Box display="flex" flexDirection="column">
      <Box color="#1B2F39" fontSize="10px" lineHeight="100%">
        From
      </Box>
      <Box display="flex">
        <Box
          lineHeight="100%"
          color="#1B2F39"
          fontWeight={400}
          fontSize="39px"
          letterSpacing="-0.05em"
        >
          ${value}
        </Box>
        <Box color="#1B2F39" fontSize="13px" lineHeight="55px">
          /mo
        </Box>
      </Box>
    </Box>
  );
}
