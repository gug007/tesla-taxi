import MuiTooltip from "@mui/material/Tooltip";

export default function Tooltip({ children, title }) {
  return (
    <MuiTooltip
      arrow
      placement="top-end"
      title={title}
      componentsProps={{
        tooltip: {
          sx: {
            padding: "10px",
            color: "rgba(0, 0, 0, 0.52)",
            bgcolor: "#FFFFFF",
            boxShadow: "0px 17px 87px rgba(0, 0, 0, 0.18)",
            "& .MuiTooltip-arrow": {
              color: "#FFFFFF",
            },
          },
        },
      }}
    >
      {children}
    </MuiTooltip>
  );
}
