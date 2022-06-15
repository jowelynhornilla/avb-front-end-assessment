import { HistoryEduOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Commenter } from "components";

import { TopCommentersProps } from "./types";

/**
 *
 *
 * @returns Top Commenters Component
 */

export const TopCommenters = (props: TopCommentersProps) => {
  const { displayCount = 3, comments } = props;

  //store a list of commenters and their corresponding total comment counts
  const commentCounts = comments?.reduce<{ name: string; count: number }[]>(
    (commentCountList, comment) => {
      return commentCountList?.some(
        (existingComment) => existingComment.name === comment.name
      )
        ? //if commenter is already stored, return current list
          commentCountList
        : // add current commenter and total comment count to the list
          [
            ...commentCountList,
            {
              name: comment.name,
              count: comments.filter(
                (existingComment) => existingComment.name === comment.name
              ).length,
            },
          ];
    },
    []
  );
  // sort by comment count, descending
  const sortedCommentCounts = commentCounts
    ?.sort((commentA, commentB) => commentB.count - commentA.count)
    //get top commenters (defaults to 3 commenters)
    .slice(0, displayCount);

  return (
    <Card>
      <CardHeader avatar={<HistoryEduOutlined />} title="Top Commenters" />

      <CardContent>
        {sortedCommentCounts?.map((commentCount) => (
          <Commenter
            name={commentCount.name}
            commentCount={commentCount.count}
          />
        ))}
      </CardContent>
    </Card>
  );
};
