export interface CommentModalFormValues {
  name?: string;
  comment?: string;
}

export interface CommentModalProps {
  isOpen?: boolean;
  handleClose?: () => void;
  handleSubmit?: (values?: CommentModalFormValues) => void;
}
