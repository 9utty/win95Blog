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

const React3 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`애플리케이션의 정의`}</H2>
      <TextTag>{`- 애플리케이션의 정의는 다른거 없이 입력을 받고 출력하는 행위를 하는 것을 말하는 것 같다`}</TextTag>
      <H2>{`웹앱의 구성요소`}</H2>
      <TextTag>
        {`1. 웹의 기본 구성요소`}
        <TabTag>{`* 웹앱을 구성하는 여러가지의 요소라고 할 수 있다`}</TabTag>
        <TabTag>{`* HTML`}</TabTag>
        <TabTag>{`* CSS`}</TabTag>
        <TabTag>{`* Javascript`}</TabTag>
        <TabTag>{`* 웹 페이지만 만들거면 HTML만 있어도 된다`}</TabTag>
        <TabTag>{`* 어떤 관점에서 모냐에 따라 많은 구성요소가 나올 수 있다`}</TabTag>
      </TextTag>
      <TextTag>
        {`2. 실행 관점의 구성요소`}
        <TabTag>
          {`* 웹 앱이 실행된다는 관점은 사용자가 주소창에 특별한 홈페이지 주소를 입력하는 행위라고 할 수 있다`}
        </TabTag>
        <TabTag>
          {`* HTML, CSS, Javascript 파일들이 물리적으로 사용자의 브라우저에 전송이 되고, 브라우저가 그 파일들을 해석해서 실행시키면 웹앱이 동작되는 형태가 된다`}
        </TabTag>
        <TabTag>{`* 웹앱을 실행시키는 주체는 브라우저이다`}</TabTag>
        <TabTag>{`* 브라우저는 런타임 환경이라고 말을 한다`}</TabTag>
      </TextTag>
      <TextTag>
        {`3. CSR & SSR`}
        <TabTag>
          {`* UI를 제공하려면 HTML을 만들어야하는데 이걸 어디서 작성을 하느냐에 관점이 있다`}
        </TabTag>
        <TabTag>{`* Javascript도 조작할 수 있다`}</TabTag>
        <TabTag>
          {`* 필요한 UI를 그때그때 만들어서 제공하는게 있다 (CSR)`}
        </TabTag>
        <TabTag>
          {`* Javascript의 실행 결과로 HTML이 만들어지는게 아니라, 웹 서버에서 HTML을 만들어서 브라우저로 전송하는 방식이 있다(SSR)`}
        </TabTag>
      </TextTag>
    </PostTemplate>
  );
};

export default React3;
