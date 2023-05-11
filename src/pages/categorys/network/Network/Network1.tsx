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

const Network1 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`Port Number의 이해`}</H2>
      <TextTag>{`- Port Number`}</TextTag>
      <TabTag>
        {`* Process 식별자`}
        <TabTag>
          {`~ 개발자의 입장에서는 Process가 무엇인지 알 수 있는 식별자라고 알고 있자`}
        </TabTag>
      </TabTag>
      <TabTag>{`* Service 식별자`}</TabTag>
      <TabTag>{`* Interface 식별자`}</TabTag>
      <TextTag>{`- Port Number의 크기는 16bit이다`}</TextTag>
      <TabTag>{`* 0 ~ 65535 범위인데 0과 65535는 안쓴다`}</TabTag>
      <TabTag>{`* 2^16 - 2 라고 볼 수 있다`}</TabTag>
      <TextTag>{`- Port Number는 소켓에 바인딩 된다`}</TextTag>
    </PostTemplate>
  );
};

export default Network1;
