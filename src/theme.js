import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans"',
  },
});

theme.typography.h1 = {
  fontSize: "40px",
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
};

theme.typography.h2 = {
  fontSize: "49px",
  lineHeight: "140%",
};

theme.typography.h3 = {
  fontSize: "39px",
  lineHeight: "140%",
};

theme.typography.h5 = {
  fontSize: "25px",
  lineHeight: "140%",
};

theme.typography.body2 = {
  fontSize: "20px",
  lineHeight: "140%",
};

theme.typography.body2 = {
  fontSize: "16px",
  lineHeight: "140%",
};

export default theme;
