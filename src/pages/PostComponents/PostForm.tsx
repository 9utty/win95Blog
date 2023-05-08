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

const PostForm = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <div></div>
    </PostTemplate>
  );
};

export default PostForm;
