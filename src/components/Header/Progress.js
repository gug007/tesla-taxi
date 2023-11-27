import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

export default function Progress({ steps, step }) {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const width = (100 / steps) * step;
  return (
    <Box
      bgcolor="rgba(29, 50, 61, 0.14)"
      height={isDesktop ? 11 : 4}
      borderRadius="5px"
    >
      <Box
        width={`${width}%`}
        bgcolor="#1D323D"
        height={isDesktop ? 12 : 4}
        borderRadius="5px"
      />
    </Box>
  );
}
