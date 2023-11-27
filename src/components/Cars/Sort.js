import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import sortDesc from "../../icons/sort-desc.svg";

const arrow = {
  asc: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17L9 11L13 15L21 7M21 7H14M21 7V14"
        stroke="#73E5FF"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  desc: (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.7568 6.9233C2.96019 6.7199 3.28997 6.7199 3.49337 6.9233L9.37508 12.805L13.1735 9.00663C13.3769 8.80324 13.7066 8.80324 13.91 9.00663L21.3542 16.4508V10.4166C21.3542 10.1289 21.5874 9.89575 21.8751 9.89575C22.1627 9.89575 22.3959 10.1289 22.3959 10.4166V17.7083C22.3959 17.9959 22.1627 18.2291 21.8751 18.2291H14.5834C14.2958 18.2291 14.0626 17.9959 14.0626 17.7083C14.0626 17.4206 14.2958 17.1874 14.5834 17.1874H20.6177L13.5417 10.1115L9.74337 13.9099C9.53997 14.1133 9.2102 14.1133 9.0068 13.9099L2.7568 7.65987C2.5534 7.45647 2.5534 7.1267 2.7568 6.9233Z"
        fill="#FECEEE"
      />
    </svg>
  ),
};

export default function Sort({ value, onChange, desktop, options }) {
  return (
    <>
      <PopupState variant="popover" popupId="popup-menu">
        {(popupState) => (
          <React.Fragment>
            {desktop ? (
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  mr: "14px",
                  textTransform: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: 500,
                  bgcolor: "#fff",
                  border: "1px solid white",
                  ":hover": {
                    color: "white",
                  },
                }}
                {...bindTrigger(popupState)}
              >
                Sort
                <Box minWidth={20} mx={1}></Box>
                <Box component="img" src={sortDesc} />
              </Button>
            ) : (
              <IconButton
                sx={{
                  mr: "6px",
                  height: 31,
                  background: "#fff",
                  color: "#999FAE",
                  fontSize: "12px",
                  textTransform: "none",
                  borderRadius: "6px",
                }}
                {...bindTrigger(popupState)}
              >
                <Box component="img" src={sortDesc} />
              </IconButton>
            )}
            <Menu
              sx={{
                ".MuiMenu-paper": {
                  boxShadow: "7px 25px 73px rgba(0, 0, 0, 0.16)",
                  borderRadius: "16px",
                },
              }}
              {...bindMenu(popupState)}
            >
              {options.map(([item, label], index) => (
                <Box
                  key={index}
                  minWidth={140}
                  sx={{ lineHeight: "140%" }}
                  onClick={() => {
                    popupState.close();
                    onChange(item);
                  }}
                >
                  {item === value && item !== "" ? (
                    <Box
                      mx={1}
                      display="flex"
                      alignItems="center"
                      p="16px 26px"
                      bgcolor="#1D323D"
                      color="white"
                      borderRadius="18px"
                      sx={{ cursor: "pointer" }}
                    >
                      <Box display="inline-flex" alignItems="center" mr={1.5}>
                        {arrow[item]}
                      </Box>
                      {label}
                    </Box>
                  ) : (
                    <Box sx={{ cursor: "pointer" }} p="16px 32px">
                      {label}
                    </Box>
                  )}
                </Box>
              ))}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}
