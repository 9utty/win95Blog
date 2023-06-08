import CodeTag from "@/pages/PostComponents/Code";
import Div from "@/pages/PostComponents/Div";
import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import TextTag from "@/pages/PostComponents/TextTag";
import Spacer from "@/pages/components/Spacer";
import React from "react";
import { Tab } from "react95";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const Network2 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`MAC, IP, Port 가 식별하는 것`}</H2>
      <TextTag>{`- MAC Address`}</TextTag>
      <TabTag>{`* Network Interface Chip의 식별자이다`}</TabTag>
      <TabTag>{`* 하드웨어의 주소라고 생각하면 될 것 같다`}</TabTag>
      <TabTag>{`* NIC는 유선/무선 이 있다면 2개가 있다고 볼 수 있다`}</TabTag>
      <TabTag>
        {`* MAC 주소는 변경 가능할까?`}{" "}
        <TabTag>{`~ Yes, 변경 가능하다`}</TabTag>
      </TabTag>
      <TextTag>{`- IP Address(IPv4, IPv6)`}</TextTag>
      <TabTag>
        {`* Host의 식별자이다`}
        <TabTag>{`~ "Host"는 쉽게 생각하면 인터넷에 연결이된 컴퓨터라고 생각할 수 있다`}</TabTag>
      </TabTag>
      <TabTag>
        {`* IP주소는 한 컴퓨터에 몇개가 있을까?`}
        <TabTag>
          {`~ n개가 있다`}
          <TabTag>{`~ NIC한개에 여러개의 바인딩(맵핑)을 할 수 있다`}</TabTag>
        </TabTag>
      </TabTag>
      <TextTag>{`- Port Number`}</TextTag>
      <TabTag>
        {`* Process 식별자`}
        <TabTag>{`~ S/W 개발을 하는분들`}</TabTag>
      </TabTag>
      <TabTag>
        {`* Service 식별자`}
        <TabTag>{`~ Network계층이나, 전송계층에서 사시는 분들`}</TabTag>
      </TabTag>
      <TabTag>
        {`* Interface number 식별자`}
        <TabTag>
          {`L1 ~ L2 물리적으로 네트워크를 설치하고 통신하는 분들`}
        </TabTag>
      </TabTag>
    </PostTemplate>
  );
};

export default Network2;
