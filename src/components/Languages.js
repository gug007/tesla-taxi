import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import { useNavigate } from "react-router-dom";

import am from "../images/am.svg";
import en from "../images/en.svg";
import ru from "../images/ru.svg";

const languages = ["am", "en", "ru"];

export default function Languages() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const changeLanguage = (language) => {
    const [, urlLang, ...restUtl] = window.location.pathname.split("/");

    if (languages.includes(urlLang)) {
      const pathname = language !== "am" ? [language, ...restUtl] : restUtl;
      navigate(`/${pathname.join("/")}${window.location.search}`);
    } else if (language !== "am") {
      navigate(
        `/${language}${window.location.pathname}${window.location.search}`
      );
    }

    i18n.changeLanguage(language);
    setAnchorEl(undefined);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <div>
      <IconButton
        aria-describedby={id}
        aria-label="Change Language"
        type="button"
        onClick={handleClick}
      >
        <img
          src={i18n.language === "en" ? en : i18n.language === "ru" ? ru : am}
          alt=""
          height="40px"
          width="40px"
        />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper sx={{ mt: 0.5 }}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem
                onClick={() => changeLanguage("am")}
                selected={i18n.language === "am"}
              >
                <img src={am} alt="" height="32px" width="32px" />
              </MenuItem>
              <MenuItem
                onClick={() => changeLanguage("en")}
                selected={i18n.language === "en"}
              >
                <img src={en} alt="" height="32px" width="32px" />
              </MenuItem>
              <MenuItem
                onClick={() => changeLanguage("ru")}
                selected={i18n.language === "ru"}
              >
                <img src={ru} alt="" height="32px" width="32px" />
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
}
