import { AxiosResponse } from "axios";
import client from "./api";
import { Comment } from "types";

//mock network request time
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//mock axios get comments request
export const fetchComments = async () => {
  const response: AxiosResponse<Comment[]> = await client.get("/comments", {});
  await sleep(500);
  return response;
};

//mock axios post comment request
export const postComment = async (comment: Partial<Omit<Comment, "id">>) => {
  const response: AxiosResponse<Comment> = await client.post("/comments", {
    ...comment,
    id: Date.now(),
  });
  await sleep(500);
  return response;
};
