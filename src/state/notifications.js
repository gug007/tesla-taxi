import React, { useCallback, useContext, useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

const NotificationsContext = React.createContext(null);

const titles = { success: "Success", error: "Error" };
const InitOptions = { open: false, message: "", status: undefined };

export default function NotificationProvider({ children }) {
  const [options, setOptions] = useState(InitOptions);

  const notifySuccess = (message) => {
    setOptions({ open: true, message, status: "success" });
  };

  const notifyError = (error) => {
    setOptions({ open: true, message: error, status: "error" });
  };

  const handleClose = useCallback(() => {
    setOptions((o) => ({ ...InitOptions, status: o.status }));
  }, [setOptions]);

  useEffect(() => {
    if (options.open) {
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  }, [options.open, handleClose]);

  return (
    <>
      <NotificationsContext.Provider value={{ notifySuccess, notifyError }}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </NotificationsContext.Provider>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={options.open}
        autoHideDuration={3000}
      >
        <Box minWidth={300}>
          <Alert
            variant="filled"
            onClose={handleClose}
            severity={options.status}
          >
            <AlertTitle>{titles[options.status]}</AlertTitle>
            {options.message}
          </Alert>
        </Box>
      </Snackbar>
    </>
  );
}

export const useNotification = () => useContext(NotificationsContext);
