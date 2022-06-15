import { Comment } from "types";

export interface TopCommentersProps {
  displayCount?: number;
  comments?: Comment[] | null;
}
