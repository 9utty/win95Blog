import CodeTag from "@/pages/PostComponents/Code";
import Div from "@/pages/PostComponents/Div";
import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import TextTag from "@/pages/PostComponents/TextTag";
import Spacer from "@/pages/components/Spacer";
import React from "react";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const Post: Post = {
  Header: "",
  Date: "",
  Tag: "",
};

const PostForm = () => {
  return (
    <PostTemplate Header={Post.Header} Date={Post.Date} Tag={Post.Tag}>
      <div></div>
    </PostTemplate>
  );
};

export default PostForm;
