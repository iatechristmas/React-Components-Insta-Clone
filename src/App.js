/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import data from "./dummy-data";
// import the PostsPage and SearchBar and add them to the App

const App = () => {
  const [users, setUsers] = useState(data);
  // console.log("App -> [users, setUsers]", [users, setUsers]);

  return (
    <div className="App">
      <SearchBar />
      <PostsPage users={users} />
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
