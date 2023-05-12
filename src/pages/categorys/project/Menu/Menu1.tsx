import CodeTag from "@/pages/PostComponents/Code";
import Div from "@/pages/PostComponents/Div";
import H2 from "@/pages/PostComponents/H2";
import ImageTag from "@/pages/PostComponents/ImageTag";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import TextColor from "@/pages/PostComponents/TextColor";
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
      <TextTag>
        {`1. 로딩액션 페이지!`}
        <ImageTag
          Url={
            "https://user-images.githubusercontent.com/86397600/237934436-a7b84fda-7e27-458c-af65-8ae01921fd3f.png"
          }
        />
        <TabTag>
          {`* 만든이유는 별다른 이유 없다... 그냥 이뻐보여서?ㅎㅎ...`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`2. 메인 페이지!`}
        <ImageTag
          Url={
            "https://user-images.githubusercontent.com/86397600/237934384-da03b52a-59e0-4810-a23b-b78b11ace477.png"
          }
        />
        <TabTag>
          {`* 메뉴추천 아이콘을 누르면 메뉴추천을 해주는 페이지가 모달로 나오게 된다`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`3. 메뉴추천`}
        <ImageTag Url="https://user-images.githubusercontent.com/86397600/237934473-005dc1de-fc58-4099-ae3e-11fd28c453c4.png" />
        <TabTag>{`* 점메추, 저메추 메뉴를 고를 수 있다!`}</TabTag>
        <TabTag>
          {`* "추천시작"버튼을 누르면 rand함수를 이용해 렌덤의 인덱스 숫자를 뽑게 되고, Menu[] 로 만들어둔 정적데이터에서 인덱스번호로 찾게 된다`}
        </TabTag>
        <Spacer />
        <ImageTag Url="https://user-images.githubusercontent.com/86397600/237934512-321cc7d5-ce57-4b31-b8d0-88089a17f6a4.png" />
        <TabTag>
          {`* 숫자전광판에 나오는 숫자는 Index 번호이고, 오늘의 저녁메뉴는? 한식 / 부침개 (key / value)를 나타낸다!`}
        </TabTag>
      </TextTag>
      <Div />
      <TextTag>
        <TextColor color="green">{`이 프로젝트로 인해서 지금의 블로그의 베이스를 만들게 되었습니다! 어이없는 이유로 시작된 프로젝트고 재밌게 만들어갈 수 있었던 좋은 프로젝트였습니다!`}</TextColor>
      </TextTag>
      <Div />
    </PostTemplate>
  );
};

export default Menu1;
