import React from "react";
import Box from "@mui/material/Box";

export default function Main() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {Array(24)
        .fill()
        .map((_, i) => {
          const currentTime = new Date();
          const from = new Date(
            currentTime.getFullYear(),
            currentTime.getMonth(),
            currentTime.getDate(),
            i
          );
          const to = new Date(
            currentTime.getFullYear(),
            currentTime.getMonth(),
            currentTime.getDate(),
            i + 1
          );

          return (
            <Box key={i}>
              <a
                rel="noreferrer"
                target="_blank"
                href={`http://localhost:3033/d/FkUpJpQZk/trip?from=${from.getTime()}&to=${to.getTime()}&orgId=1&viewPanel=6`}
              >
                <Box fontSize={26}>
                  {from.toLocaleTimeString()} - {to.toLocaleTimeString()}
                </Box>
                <iframe
                  src={`http://localhost:3033/d/FkUpJpQZk/trip?from=${from.getTime()}&to=${to.getTime()}&orgId=1&viewPanel=6`}
                  name="iframe_a"
                  height="700px"
                  width="100%"
                  title="Iframe Example"
                ></iframe>
              </a>
            </Box>
          );
        })}
    </Box>
  );
}
