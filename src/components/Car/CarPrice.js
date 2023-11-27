import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PriceDetailsModal from "./PriceDetailsModal";

export default function CarPrice({ item }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Box display="flex" alignItems="flex-end" color="#1B2F39">
        <Box>
          <Box fontSize="10px" mb="-8px">
            From
          </Box>
          <Typography variant="h3" fontWeight={700}>
            ${parseFloat(item.monthly_price)}
          </Typography>
        </Box>
        <Box mb="10px" fontSize="10px" color="#1D323D">
          /mo
        </Box>
      </Box>
      <Box
        align="right"
        maxWidth="106px"
        color="#1D323D"
        fontSize="10px"
        sx={{ textDecorationLine: "underline", cursor: "pointer" }}
        mt={-0.5}
        onClick={handleToggle}
      >
        Before taxes & fees
      </Box>
      {open && (
        <PriceDetailsModal item={item} onClose={handleToggle} />
      )}
    </Box>
  );
}
