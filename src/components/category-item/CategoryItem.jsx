import React from "react";
import { useTheme } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  categorieContainer: {
    minWidth: "30%",
    height: "240px",
    flex: "1 1 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    margin: "0 7.5px 15px",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover $backgroundImage": {
      transform: "scale(1.1)",
      transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
    },
    "&:hover $categorieBodyContainer": {
      opacity: "0.9",
    },

    "&.large": {
      height: "380px",
    },
    "&:first-child": {
      marginRight: "7.5px",
    },
    "&:last-child": {
      marginLeft: "7.5px",
    },
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  categorieBodyContainer: {
    height: "90px",
    padding: "0 25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    backgroundColor: "white",
    opacity: "0.7",
    position: "absolute",
    "& h2": {
      fontWeight: "bold",
      margin: "0 6px 0",
      fontSize: "22px",
      color: "#4a4a4a",
    },
    "& p": {
      fontWeight: "lighter",
      fontSize: "16px",
    },
  },
}));

export default function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Box className={classes.categorieContainer}>
      <Box
        className={classes.backgroundImage}
        sx={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Box className={classes.categorieBodyContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">Shop Now</Typography>
      </Box>
    </Box>
  );
}
