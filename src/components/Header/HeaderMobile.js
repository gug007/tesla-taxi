import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

import HamburgerMenu from "./HamburgerMenu";
import blackLogo from "../../icons/logo.svg";
import whiteLogo from "../../icons/logo-white.svg";

const colors = {
  light: {
    logo: blackLogo,
    underline: "1px solid rgba(0, 0, 0, 0.05)",
  },
  dark: {
    logo: whiteLogo,
    underline: "1px solid rgba(255, 255, 255, 0.09)",
  },
};

export default function HeaderMobile({
  theme = "light",
  onClickHome,
  hiddenBorderBottom,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClickHome) {
      onClickHome();
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      p="20px"
      pt="26px"
      display="flex"
      justifyContent="space-between"
      borderBottom={hiddenBorderBottom ? undefined : colors[theme].underline}
    >
      <ButtonBase onClick={handleClick}>
        <img src={colors[theme].logo} alt="" />
      </ButtonBase>
      <HamburgerMenu theme={theme} />
    </Box>
  );
}
