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

const React2 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`RTK Query란?`}</H2>
      <TextTag>
        {`- RTK Query는 Redux Toolkit의 일부이고, 웹 API의 상호작용하는 작업을 단순화하기 위한 도구이다`}
      </TextTag>
      <H2>{`RTK Query가 제공하는 기능`}</H2>
      <TextTag>
        {`1. 자동으로 API 클라이언트를 생성한다`}
        <TabTag>
          {`* API 엔드포인트를 정의하면, RTK Query가 해당 엔드포인트와 통신하기 위해 필요한 action, reducer 등을 자동으로 생성한다`}{" "}
        </TabTag>
      </TextTag>
    </PostTemplate>
  );
};

export default React2;
