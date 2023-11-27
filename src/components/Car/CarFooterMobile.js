import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ActionLink from "../FooterAction/ActionLink";
import FooterContainer from "../FooterAction/FooterContainer";

export default function CarFooterMobile({ title }) {
  return (
    <FooterContainer redRightBox blueLeftCircle>
      <Box
        width="100%"
        minHeight="90px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box ml={2}>
          <Typography
            align="center"
            variant="body2"
            letterSpacing="-0.05em"
            fontWeight={700}
          >
            {title || "2023 Tesla Model Y"}
          </Typography>
          <Typography mt="-2px" align="center" fontSize="13px">
            Only takes 1-2 min
          </Typography>
        </Box>
        <ActionLink to="/questions">Get my deal</ActionLink>
      </Box>
    </FooterContainer>
  );
}
