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
  Header: "Promise 기본 개념부터~",
  Date: "2023년 05월 07일",
  Tag: "JavaScript",
};

const JavaScript4 = () => {
  return (
    <PostTemplate Header={Post.Header} Date={Post.Date} Tag={Post.Tag}>
      <H2>
        <div>{`JavaScript의 Promise`}</div>
      </H2>
      <TextTag>
        <div>{`- 비동기 연산을 다루는 Promise`}</div>
      </TextTag>
      <TextTag>
        <div>{`- Promise는 CallBack 지옥에서 탈출하게 도와줄 수 있다`}</div>
      </TextTag>
    </PostTemplate>
  );
};

export default JavaScript4;
