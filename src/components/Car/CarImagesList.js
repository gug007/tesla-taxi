import Box from "@mui/material/Box";

export default function CarImagesList({ selected, images, onChange }) {
  return (
    <>
      <Box
        display="flex"
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": { width: 0 },
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            mr="19px"
            display="flex"
            alignItems="center"
            mt="20px"
            width={{ xs: "80px", md: "205px" }}
            minWidth={{ xs: "80px", md: "205px" }}
            height={{ xs: "70px", md: "179px" }}
            boxSizing="border-box"
            bgcolor="#FFFFFF"
            borderRadius="11px"
            sx={{
              overflow: "hidden",
              cursor: "pointer",
              opacity: selected === index ? 1 : 0.3,
            }}
            border={
              selected === index
                ? "2px solid #65D8F2"
                : "1px solid rgba(131, 131, 131, 0.38)"
            }
            onClick={() => {
              onChange(index);
            }}
          >
            <Box pt="20px">
              <img
                style={{ maxWidth: "100%" }}
                src={image.data.attributes.url}
                alt=""
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
