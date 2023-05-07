import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import React from "react";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const Post: Post = {
  Header: "일급함수, add_maker",
  Date: "2023년 5월 7일",
  Tag: "JavaScript",
};

const JavaScript3 = () => {
  return (
    <PostTemplate Header={Post.Header} Date={Post.Date} Tag={Post.Tag}>
      <H2>
        <div>{`일급함수`}</div>
      </H2>
    </PostTemplate>
  );
};

export default JavaScript3;
