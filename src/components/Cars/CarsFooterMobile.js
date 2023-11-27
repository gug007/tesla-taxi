import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ActionLink from "../FooterAction/ActionLink";
import FooterContainer from "../FooterAction/FooterContainer";

export default function CarsFooterMobile() {
  return (
    <FooterContainer redRightBox blueLeftCircle>
      <Box
        width="100%"
        minHeight="90px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box px={3}>
          <Typography
            align="center"
            variant="body2"
            letterSpacing="-0.05em"
            fontWeight={700}
          >
            Get paired with the right EV for you!
          </Typography>
        </Box>
        <ActionLink to="/questions">Get offers</ActionLink>
      </Box>
    </FooterContainer>
  );
}
