import TextTag from "@/pages/PostComponents/TextTag";
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
      <Spacer />
      <TextTag>
        <div>{`- JavaScript에서 함수는 일급함수라고 할 수 있다. 함수를 값으로 다룰 수 있고 함수를 변수에 담을 수 있고, 변수에 담은 함수가 변수로 다뤄질 수 있다.`}</div>
      </TextTag>
    </PostTemplate>
  );
};

export default JavaScript3;
