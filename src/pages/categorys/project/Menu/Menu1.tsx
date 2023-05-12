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

const Menu1 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`42메뉴추천을 소개합니다!`}</H2>
      <TextTag>{`- 지금의 내 블로그의 베이스가 된 프로젝트이다!`}</TextTag>
      <TextTag>{`- 기간은 만 하루도 안걸린 것 같다!`}</TextTag>
      <TextTag>
        {`- 시작하게 된 배경`}
        <TabTag>
          {`* 42동료들과 저녁메뉴를 고르고 있던 중에 동료분중 한분이 "저녁메뉴 추천해주는 프로그램 없나?"로 시작`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`- 그렇다면 디자인은 어떻게?`}
        <TabTag>
          {`* 옛날 window 스타일을 추천받아 구글링을 하기 시작했다!`}
        </TabTag>
      </TextTag>
      <H2>{`나는 믿고 있었다고 JS!!`}</H2>
      <TextTag>{`- 역시나 거대한 커뮤니티를 가지고 있는 JS생태계`}</TextTag>
      <TextTag>
        {`- window95 스타일의 라이브러리가 분명있을 것 같아!`}
        <TabTag>
          {`* 다행히 ㅠㅠ 찾던 중에 react95라는 UI컴포넌트를 찾게되었!!`}
        </TabTag>
        <TabTag>{`* react95를 만들어주신 개발자님 찬양합니다!😍`}</TabTag>
      </TextTag>
      <H2>{`정적페이지로 만들자!`}</H2>
      <TextTag>
        {`1. NextJS로 정적페이지 만들어보자,`}
        <TabTag>
          {`* NextJS로 다행히도 정적페이지를 추출할 수 있다고 한다. "next build && next export" cmd명령어로 빌드하면 된다고 한다`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`2. 배포는 GithubPage? Netlify?`}
        <TabTag>
          {`* 내가 선택한건 Netlify라는 배포서비스를 이용했다`}
          <TabTag>
            {`~ 그 이유로는 생각보다 초보자들이 사용하기 쉽게 잘 되어 있고, 그리고 배포도 간단하게 Netlify에서 설정만 해두면 되기때문에 선택하게 되었다`}
          </TabTag>
        </TabTag>
      </TextTag>
      <TextTag>
        {`3. 데이터들은 어떻게?`}
        <CodeTag
          code={`interface Menu {
  key: string;
  value: string;
}`}
          lang={"javascript"}
        />
        <TabTag>
          {`* 프로젝트 내에서 그냥 Menu[]을 만들어두고 그 안에 데이터들을 정적으로 선언하고 컴포넌트에서는 import해서 사용`}
        </TabTag>
        <TabTag>
          {`* key는 음식의 카테고리(예: 중식, 한식, 양식), value는 음식 이름(예: 탕수육, 짜장면, 김치찌개)`}
        </TabTag>
      </TextTag>
      <H2>{`각각의 페이지 소개`}</H2>
    </PostTemplate>
  );
};

export default Menu1;
