"use client";

import React from "react";
import { CommentWrapper, Hr } from "./styled";

interface CommentProps {}

const Comment = ({}: CommentProps) => {
  return (
    <CommentWrapper>
      <Hr />
      <h5>leave a comment</h5>
    </CommentWrapper>
  );
};

export default Comment;
