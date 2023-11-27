import Hidden from "@mui/material/Hidden";
import { useParams } from "react-router-dom";

import HeaderMobile from "../Header/HeaderMobile";
import HeaderCarDesktop from "./HeaderCarDesktop";
import { useCarCustomSetting } from "../../state/car-custom-settings";

export default function Header({ item }) {
  const { id } = useParams();
  const { settings } = useCarCustomSetting();
  const reserveLink = `/reserve?id=${id}&lease_length=${settings.leaseLength}`;

  return (
    <>
      <Hidden mdUp>
        <HeaderMobile />
      </Hidden>
      <Hidden mdDown>
        <HeaderCarDesktop item={item} to={reserveLink} />
      </Hidden>
    </>
  );
}
