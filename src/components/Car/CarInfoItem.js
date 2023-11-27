import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";

export default function CarInfoItem({ value, desc, boxes, link, onClick }) {
  return (
    <Box p="20px">
      <Box
        display="flex"
        alignItems="flex-end"
        fontSize={{ xs: "36px", md: "70px" }}
        fontWeight={500}
        lineHeight={0.9}
      >
        {value}
        <Hidden mdUp>
          <Box ml="2px" fontSize="12px" lineHeight="16px">
            {desc}
          </Box>
        </Hidden>
      </Box>
      <Box mt={{ xs: 1, md: 2.5 }} display="flex">
        {Array(4)
          .fill()
          .map((v, i) => (
            <Box
              key={i}
              mr={0.5}
              width={{ xs: "21px", md: "37px" }}
              height={{ xs: "21px", md: "37px" }}
              bgcolor={boxes > i ? "#73E5FF" : "#F1F1F1"}
              border={boxes > i ? "0.5px solid #73E5FF" : "0.5px solid #EAEAEA"}
              borderRadius="1px"
            />
          ))}
      </Box>
      <Box
        mt={1.5}
        color="white"
        fontSize={{ xs: "12px", md: "24px" }}
        sx={{
          opacity: { md: 0.79 },
          textDecorationLine: "underline",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {link}
      </Box>
    </Box>
  );
}
