import Box from "@mui/material/Box";

import done from "../../icons/done.svg";

export default function FilterItem({ selected, onToggle, title, list }) {
  return (
    <Box>
      <Box px="20px" pb="15px" fontSize={20} fontWeight={700}>
        {title}
      </Box>
      {list.map((value, index) => (
        <Box
          key={index}
          py="10px"
          px="20px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => onToggle(value)}
          sx={{
            cursor: "pointer",
            border: "1px solid white",
            ":hover": {
              background: "rgba(115, 229, 255, 0.1)",
              border: "1px solid #74E5FF",
              borderRadius: "13px",
              // py: "20px",
            },
          }}
        >
          {value}
          {selected.includes(value) ? (
            <Box component="img" width="20px" height="20px" src={done} />
          ) : (
            <Box
              width="20px"
              height="20px"
              border="1px solid #D0D5DD"
              bgcolor="#F7F7F7"
              borderRadius="50%"
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
