import H1 from "@/pages/components/H1";
import React from "react";
import Des from "./pages/components/Des";

interface Post {
  Header: string;
  Date: string;
}

const Post: Post = {
  Header: "",
  Date: "",
};

const PostTemp = () => {
  return (
    <div>
      <H1>{Post.Header}</H1>
      <div>{Post.Date}</div>
    </div>
  );
};

export default PostTemp;
