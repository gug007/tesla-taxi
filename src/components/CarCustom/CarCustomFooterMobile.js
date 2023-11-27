import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import ActionLink from "../FooterAction/ActionLink";
import FooterContainer from "../FooterAction/FooterContainer";
import { useCarCustomSetting } from "../../state/car-custom-settings";
import {getLeaseDetail} from "../../utils/car";

export default function CarCustomFooterMobile({ item }) {
  const { settings } = useCarCustomSetting();
  const { id } = useParams();
  const lease = getLeaseDetail(item, settings.leaseLength);
  const reserveLink = `/reserve?id=${id}&lease_length=${settings.leaseLength}`;

  return (
    <FooterContainer redRightBox blueLeftBigCircle>
      <Box
        width="100%"
        display="flex"
        minHeight="90px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box />
        <Box ml={2}>
          <Typography
            align="center"
            variant="body2"
            letterSpacing="-0.05em"
            fontWeight={700}
          >
            ${parseFloat(lease.monthly_payment)}/mo x {settings.leaseLength} months
          </Typography>
          <Typography align="center" mt="-2px" fontSize="14px">
            +${parseFloat(lease.upfront_payment)} upfront
          </Typography>
          <Typography align="center" mt="-2px" fontSize="10px" color="#1D323D">
            Total before taxes
          </Typography>
        </Box>
        <ActionLink to={reserveLink}>Reserve</ActionLink>
      </Box>
    </FooterContainer>
  );
}
