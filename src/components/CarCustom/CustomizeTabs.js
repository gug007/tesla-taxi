import Box from "@mui/material/Box";

import { useCarCustomSetting } from "../../state/car-custom-settings";

const list = [
  [6, "6 months"],
  [12, "12 months"],
  [30, "30 months"],
];

export default function CustomizeTabs() {
  const { settings, setSettings } = useCarCustomSetting();
  const selected = settings.leaseLength;

  return (
    <Box
      display="flex"
      mt={1}
      bgcolor="#F4F5F7"
      borderRadius="14px"
      border="1px solid #E9EAEC"
      p={0.5}
    >
      {list.map(([value, label]) => (
        <Box
          key={value}
          mr={1}
          px="10px"
          py="8px"
          flexGrow={1}
          align="center"
          fontSize="13px"
          color={value === selected ? "#FFFFFF" : "#666666"}
          bgcolor={value === selected ? "#73E5FF" : undefined}
          borderRadius="12px"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setSettings((v) => ({ ...v, leaseLength: value }));
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  );
}
