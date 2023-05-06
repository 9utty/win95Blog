import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import Spacer from "@/pages/components/Spacer";
import React from "react";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const Post: Post = {
  Header: "함수형 프로그래밍 정의, 순수함수",
  Date: "2023년 4월 17일",
  Tag: "JavaScript",
};

const JavaScript2 = () => {
  return (
    <PostTemplate Header={Post.Header} Date={Post.Date} Tag={Post.Tag}>
      <H2>성공적인 프로그래밍에 대해서 생각해보자</H2>
      <Spacer />
    </PostTemplate>
  );
};

export default JavaScript2;
