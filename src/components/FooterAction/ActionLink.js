import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ActionLink({ ...props }) {
  return (
    <Button
      variant="contained"
      size="large"
      component={Link}
      sx={{
        mr: "19px",
        height: 49,
        minWidth: 120,
        textTransform: "none",
        fontSize: "13px",
        boxShadow: "none !important",
        background: "#1D323D",
        color: "white",
        border: "1px solid #fff",
        borderRadius: "12px",
        ":hover": {
          background: "#1D323D",
          color: "white",
          border: "1px solid #fff",
        },
        ":active": {
          background: "#1D323D",
          color: "white",
          border: "1px solid #fff",
        },
      }}
      {...props}
    />
  );
}
