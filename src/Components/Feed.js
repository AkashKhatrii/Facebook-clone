import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="http://2.bp.blogspot.com/-aajuO5QuxOE/UMLhwWZDToI/AAAAAAAAAHI/c9RVf_DXcM8/s1600/83099042.jpg"
        message="Wow this works"
        timestamp="This is timestamp"
        username="Akashhh"
        image="https://www.pixel4k.com/wp-content/uploads/2019/10/spiderman-monochrome-new_1570394821.jpg"
      />
    </div>
  );
}

export default Feed;
