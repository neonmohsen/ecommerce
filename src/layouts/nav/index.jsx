import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg";

const useStyles = makeStyles((theme) => ({
  navigation: {
    height: "70px",
    width: "100%",
    display: "flex",
    justifyContent: "spaceBetween",
    marginBottom: "25px",
  },
  logoContainer: {
    height: "100%",
    width: "70px",
    padding: "25px",
  },
  navLinksContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  navLink: {
    padding: "10px 15px",
    cursor: "pointer",
  },
}));

export default function Navbar() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <>
      <Box className={classes.navigation}>
        <Link to="/" className={classes.logoContainer}>
          <Logo className={classes.logo} />
        </Link>
        <Box className={classes.navLinksContainer}>
          <Link to="/shop" className={classes.navLink}>
            <Typography variant="body1" component="h6">
              SHOP
            </Typography>
          </Link>
        </Box>
      </Box>
      <Outlet />
    </>
  );
}
