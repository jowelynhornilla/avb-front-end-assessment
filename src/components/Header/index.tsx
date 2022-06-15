import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { HeaderProps } from "./types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const Header = (props: HeaderProps) => {
  const { handleOpen } = props;
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Commentor
        </Typography>

        <Button color="inherit" onClick={handleOpen}>
          Add Comment
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
