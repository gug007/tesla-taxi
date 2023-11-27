import Box from "@mui/material/Box";

export default function Square({ selected }) {
  return (
    <Box
      width="10px"
      height="10px"
      bgcolor={selected ? "#68DFFF" : "#F1FCFF"}
      border="0.5px solid #73E5FF"
      borderRadius="1px"
      mr="2px"
    />
  );
}
