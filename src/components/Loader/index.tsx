import { Box, CircularProgress } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    position: "fixed",
    display: "flex",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    aligncontent: "center",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    opacity: 10,
    zIndex: 100,
  },
}));

/**
 *
 * @returns Loader Component
 */

export const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loaderContainer}>
      <CircularProgress />
    </Box>
  );
};
