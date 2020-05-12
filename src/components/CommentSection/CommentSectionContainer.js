// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // console.log("CommentSection -> (props)", props);

  return (
    <div>
      {props.comments.map((commentObj, index) => {
        // console.log(commentObj);
        return <Comment comment={commentObj} />;
      })}
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
