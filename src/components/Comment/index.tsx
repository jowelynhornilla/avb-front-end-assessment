import {
  Avatar,
  CardHeader,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { CommentProp } from "./types";

import { makeStyles } from "@mui/styles";
import { getInitialsFromString, getRandomColor } from "utils";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 5,
  },
}));

/**
 *
 * @param props
 * name - commenter's name
 * comment - comment of the user
 *
 * @returns Comment Component
 */

export const Comment = (props: CommentProp) => {
  const { name, comment } = props;
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: getRandomColor() }} aria-label={name}>
            {getInitialsFromString(name, 2)}
          </Avatar>
        }
        title={name}
      />

      <CardContent>
        <Typography variant="body2">{comment}</Typography>
      </CardContent>
    </Card>
  );
};
