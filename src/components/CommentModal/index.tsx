import { useState } from "react";

import {
  Modal,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Grid,
  CardActions,
  Button,
  cardContentClasses,
  cardActionsClasses,
  buttonClasses,
} from "@mui/material";
import { CommentModalFormValues, CommentModalProps } from "./types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    [`& .${cardContentClasses.root}`]: {
      padding: "0px 60px",
    },

    [`& .${cardActionsClasses.root}`]: {
      padding: 16,

      [`& .${buttonClasses.root}:first-child`]: {
        marginLeft: "auto",
      },
    },
  },
}));

/**
 *
 *
 *
 * @returns Add Comment Modal
 */

const CommentModal = (props: CommentModalProps) => {
  const { isOpen = false, handleClose, handleSubmit } = props;
  const classes = useStyles();

  const [formValues, setFormValues] = useState<CommentModalFormValues>();

  //stores field value to state
  const handleChange = (field: keyof CommentModalFormValues, value: string) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setFormValues({ name: "", comment: "" });
          if (handleSubmit) {
            handleSubmit(formValues);
          }
        }}
      >
        <Card className={classes.cardContainer}>
          <CardHeader title="Add Comment" />
          <CardContent sx={{ px: 10 }}>
            <Grid>
              <TextField
                id="standard-textarea"
                label="Name"
                value={formValues?.name}
                onChange={(event) => handleChange("name", event.target.value)}
                placeholder="Name"
                variant="standard"
              />
            </Grid>
            <Grid>
              <TextField
                id="standard-textarea"
                label="Comment"
                value={formValues?.comment}
                onChange={(event) =>
                  handleChange("comment", event.target.value)
                }
                placeholder="Comment"
                multiline
                variant="standard"
              />
            </Grid>
          </CardContent>
          <CardActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </CardActions>
        </Card>
      </form>
    </Modal>
  );
};

export * from "./types";
export default CommentModal;
