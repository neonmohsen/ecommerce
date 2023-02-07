import { Box } from "@mui/system";
import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import { useTheme } from "@emotion/react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  categoriesContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));

export default function Directory({ categories }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Box className={classes.categoriesContainer}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Box>
  );
}
