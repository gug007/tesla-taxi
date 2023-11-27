import Box from "@mui/material/Box";

export default function RedBackground({ children }) {
  return (
    <Box
      position="absolute"
      width="100%"
      minHeight="109px"
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          right: -81,
          bottom: -60,
          width: "132px",
          height: "105px",
          background: "#FECEEE",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          right: 40,
          bottom: -60,
          height: "105px",
          width: "30px",
          backgroundColor: "#FECEEE",
          transform: "skewX(-20deg)",
        },
      }}
    >
      {children}
    </Box>
  );
}
