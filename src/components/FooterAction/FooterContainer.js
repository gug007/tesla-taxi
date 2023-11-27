import Box from "@mui/material/Box";

import BlueBackground from "./BlueBackground";
import BlueBigBackground from "./BlueBigBackground";
import RedBackground from "./RedBackground";

export default function FooterContainer({
  children,
  blueLeftCircle,
  blueLeftBigCircle,
  redRightBox,
}) {
  return (
    <>
      <Box minHeight="90px" />
      <Box
        position="fixed"
        bottom={0}
        width="100%"
        overflow="hidden"
        bgcolor="#fff"
        minHeight="90px"
        borderTop="1px solid #D9D9D9"
      >
        {blueLeftBigCircle && <BlueBigBackground />}
        {blueLeftCircle && <BlueBackground />}
        {redRightBox && <RedBackground />}
        {children}
      </Box>
    </>
  );
}
