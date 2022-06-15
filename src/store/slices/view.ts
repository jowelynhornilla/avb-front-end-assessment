import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "types";

interface CommentsContainerState {
  comments?: Comment[] | null;
  isPageLoading?: boolean;
  error?: string | null;
}

export const name = "view";
const initialState: CommentsContainerState = {
  comments: null,
  isPageLoading: false,
  error: null,
};

const viewSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCommentsList(state, action: PayloadAction<{ comments?: Comment[] }>) {
      state.isPageLoading = false;
      state.comments = action.payload.comments;
    },
    setIsPageLoading(state, action: PayloadAction<boolean>) {
      state.isPageLoading = action.payload;
    },
    setCommentsListError(state, action: PayloadAction<{ error?: string }>) {
      state.isPageLoading = false;
      state.error = action.payload.error;
    },

    addComment(state, action: PayloadAction<Comment>) {
      state.isPageLoading = false;
      state.comments?.push(action.payload);
    },
  },
});

const getSlice = (state: { view: CommentsContainerState }) =>
  state[name] || initialState;

export const getCommentList = createSelector(
  getSlice,
  (slice) => slice.comments
);

export const isPageLoading = createSelector(
  getSlice,
  (slice) => slice.isPageLoading
);

export const {
  setCommentsList,
  setIsPageLoading,
  setCommentsListError,
  addComment,
} = viewSlice.actions;
export default viewSlice.reducer;
