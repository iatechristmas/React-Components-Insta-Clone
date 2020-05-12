// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  const { user } = props;
  const [likes, setLikes] = useState(user.likes);

  return (
    <div className="post-border">
      <PostHeader username={user.username} thumbnailUrl={user.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={user.imageUrl} />
      </div>
      <LikeSection likeNumber={likes} setLikes={setLikes} />
      <CommentSection postId={user.imageUrl} comments={user.comments} />
    </div>
  );
};

export default Post;
