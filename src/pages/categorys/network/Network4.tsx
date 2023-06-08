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

const Network4 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`IP(Internet Protocol) 주소`}</H2>
      <TextTag>
        {`- Host에 대한 식별자`}
        <TabTag>{`* 사람으로 치면 주민등록번호 같은 것`}</TabTag>
      </TextTag>
      <TextTag>
        {`- IPv4`}
        <TabTag>{`* 주소체계: 32비트`}</TabTag>
        <TabTag>{`* 경우의 수가 2^32 이다`}</TabTag>
        <TabTag>{`* u_int`}</TabTag>
      </TextTag>
      <TextTag>
        {`- IPv6`}
        <TabTag>{`* 주소체계: 128비트`}</TabTag>
      </TextTag>
      <TextTag>
        {`- IP주소가 어떻게 생겼나?`}
        <TabTag>{`* 192.168.65.14`}</TabTag>
      </TextTag>
      <TextTag>
        {`- IP주소는 크게 두가지로 나눌 수 있다`}
        <TabTag>
          {`* 192.168.65`}
          <TabTag>{`~ Network ID`}</TabTag>
          <TabTag>{`~ 길이: 24`}</TabTag>
          <TabTag>{`~ IP주소에서 Network ID의 길이를 나타내는게 Net-Mask이다`}</TabTag>
          <TabTag>{`~ Net-Mask를 보면 255.255.255.0 이런식으로 나오는데 이걸 실제 IP주소와 비트연산(AND)을 하게 되면 나오는 값이 Net-work ID이다`}</TabTag>
        </TabTag>
        <TabTag>
          {`* 14`}
          <TabTag>{`~ Host ID`}</TabTag>
          <TabTag>{`~ 길이: 8`}</TabTag>
        </TabTag>
      </TextTag>
      <H2>{`Network는`}</H2>
      <TextTag>{`- 쉽게 생각해 대한민국의 행정체계처럼 볼 수 있다`}</TextTag>
    </PostTemplate>
  );
};

export default Network4;
