import Box from "@mui/material/Box";

export default function BlueBackground({ children }) {
  return (
    <Box
      position="absolute"
      width="100%"
      minHeight="109px"
      sx={{
        "&::before": {
          content: '""',
          zIndex: -1,
          position: "absolute",
          left: -150,
          top: -220,
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "#73E5FF",
        },
      }}
    >
      {children}
    </Box>
  );
}
