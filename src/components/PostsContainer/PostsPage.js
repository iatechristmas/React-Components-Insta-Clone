//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data

const PostsPage = (props) => {
  const { users } = props;
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {users.map((userObj, index) => {
        // console.log("PostsPage -> (userObj)", userObj);

        return <Post key={index} user={userObj} />;
      })}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
