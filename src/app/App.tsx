import React, { useEffect, useState } from "react";

import Header from "components/Header";
import CommentModal, { CommentModalFormValues } from "components/CommentModal";

import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentList,
  setCommentsList,
  setCommentsListError,
  setIsPageLoading,
  isPageLoading,
} from "store/slices/view";
import { Comment } from "components/Comment";
import { fetchComments, postComment } from "services";

import { Loader, TopCommenters } from "components";
import { Container, Grid, Box } from "@mui/material";

import "app/App.css";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    height: "90vh",
    overflowX: "hidden",
    overflowY: "scroll",
  },
}));

const App = () => {
  // selects comments from store
  const commentsList = useSelector(getCommentList);
  // selects loading state from store
  const isLoading = useSelector(isPageLoading);

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  //requests comments from api and stores result to store
  useEffect(() => {
    dispatch(setIsPageLoading(true));
    fetchComments()
      .then((response) => {
        dispatch(
          setCommentsList({
            comments: response.data,
          })
        );
      })
      .catch((error) => {
        dispatch(
          setCommentsListError({
            error,
          })
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //submits comment to Api
  const handleCommentSubmit = async (values?: CommentModalFormValues) => {
    setIsCommentModalOpen(false);
    if (values) {
      dispatch(setIsPageLoading(true));
      const response = await postComment(values);
      dispatch(addComment(response.data));
    }
  };

  return (
    <>
      <Header
        handleOpen={() => {
          setIsCommentModalOpen(true);
        }}
      />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={8} sm={12} order={{ sm: 2, md: 1 }}>
            <Box className={classes.listContainer}>
              {commentsList?.map((comment) => (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  comment={comment.comment}
                />
              ))}
            </Box>
          </Grid>
          <Grid item md={4} sm={12} order={{ sm: 1, md: 2 }}>
            <TopCommenters comments={commentsList} />
          </Grid>
        </Grid>
        {isLoading && <Loader />}
      </Container>

      <CommentModal
        isOpen={isCommentModalOpen}
        handleClose={() => {
          setIsCommentModalOpen(false);
        }}
        handleSubmit={handleCommentSubmit}
      />
    </>
  );
};

export default App;
