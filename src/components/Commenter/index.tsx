import { Avatar, Paper, Chip, chipClasses } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getInitialsFromString, getRandomColor } from "utils";
import { CommenterProps } from "./types";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0px",
    padding: 5,

    [`& > span`]: {
      marginLeft: 20,
    },

    [`& .${chipClasses.root}`]: {
      marginLeft: "auto",
    },
  },
}));

/**
 *
 * @param props
 * name - commenter's name
 * commentCount - number of comments
 * @returns Commenter Component
 */
export const Commenter = (props: CommenterProps) => {
  const { name, commentCount } = props;
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.container}>
      <Avatar aria-label={name} sx={{ backgroundColor: getRandomColor() }}>
        {getInitialsFromString(name, 2)}
      </Avatar>
      <span>{name}</span>
      <Chip label={`${commentCount} comment${commentCount > 1 ? "s" : ""}`} />
    </Paper>
  );
};
