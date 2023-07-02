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

const Network3 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`Host, Switch, Network 이들의 관계에 대하`}</H2>
      <TextTag>
        {`- Host`}
        <TabTag>
          {`* 기본적으로 컴퓨터인데 네트워크에 연결되어 있다면 Host라고 할 수 있다`}
        </TabTag>
        <TabTag>
          {`* Host라는 것을 크게 본다면?`}
          <TabTag>
            {`~ Network 자체`}
            <TabTag>{`기본적으로 Switch라고 봐야한다`}</TabTag>
            <TabTag>
              {`대표적으로 Router가 있다.`}
              <TabTag>
                {`왜 스위치를 할까?`} <TabTag>{`경로를 찾기 위해서`}</TabTag>
              </TabTag>
            </TabTag>
            <TabTag>
              {`F/W, IPS 이런것도 Switch라고 할 수 있다. (보안관련된)`}
            </TabTag>
          </TabTag>
          <TabTag>
            {`~ Network 이용주체`}
            <TabTag>{`End-Point(단말기계)라고 한다`}</TabTag>
            <TabTag>{`이용 주체로는 Peer, Server, Client`}</TabTag>
          </TabTag>
        </TabTag>
      </TextTag>
      <TextTag>
        {`- Network`}
        <TabTag>
          {`* 가장 유명한게 Internet이 있다`}
          <TabTag>
            {`~ Internet을 구성하고 있는 가장 중요한 구성 요소가 두가지가 있다!`}
          </TabTag>
          <TabTag>
            {`~ Router와 DNS 두가지가 있고, Internet은 Router와 DNS의 집합체이다`}
          </TabTag>
        </TabTag>
      </TextTag>
    </PostTemplate>
  );
};

export default Network3;
