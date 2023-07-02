import CodeTag from "@/pages/PostComponents/Code";
import Div from "@/pages/PostComponents/Div";
import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import TextTag from "@/pages/PostComponents/TextTag";
import Spacer from "@/pages/components/Spacer";
import React from "react";
import { useRouter } from "next/router";

const PostForm = () => {
  const router = useRouter();

  const { Header, Data, Tag } = router.query;

  const header = Header as string;
  const date = Data as string;
  const tag = Tag as string;

  return (
    <PostTemplate Header={header} Date={date} Tag={tag}>
      <div></div>
    </PostTemplate>
  );
};

export default PostForm;
