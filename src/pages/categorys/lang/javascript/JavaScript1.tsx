import Text from "@/pages/PostComponents/Text";
import H1 from "@/pages/PostComponents/H1";
import ImageTag from "@/pages/PostComponents/ImageTag";
import PostLayout from "@/pages/PostComponents/PostLayout";
import Spacer from "@/pages/components/Spacer";
import React from "react";
import PostTemplate from "../../../PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import H3 from "@/pages/PostComponents/H3";
import TextColor from "@/pages/PostComponents/TextColor";
import H2 from "@/pages/PostComponents/H2";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const Post: Post = {
  Header: "JavaScript의 변천사",
  Date: "2023년 4월 27일",
  Tag: "JavaScript",
};

const JavaScript1 = () => {
  return (
    <PostTemplate Header={Post.Header} Date={Post.Date} Tag={Post.Tag}>
      <H2>
        <div>JavaScript버전</div>
      </H2>
      <Spacer />
      <Text>
        <div>- 1995년에 등장하게 된다</div>
        <TabTag>
          <div>* 넷스케이프라고 하는 브라우저에 탑재 되어서 나옴</div>
          <div>* 이때는 JavaScript가 아닌 LiveScript라는 이름으로 나왔다</div>
        </TabTag>
      </Text>
      <Text>
        <div>
          - 간단하게 HTML을 이용하기 위해 사용했기 때문에 가지고 있던 스펙도
          그렇게 많지 않았다
        </div>
      </Text>
      <Text>
        <div>
          - 1997년에 ECMA라는 표준단체가 표쥰을 계속 개발하는 방식으로 진행 되기
          시작
        </div>
        <TabTag>
          <div>* JavaScript의 공식 명칭은 EcmaScript 이다</div>
        </TabTag>
      </Text>
      <Text>
        <div>- 인터넷에 발전과 함께 계속 발전하게 된다</div>
      </Text>
      <Text>
        <div>
          - ES2015 버전이 나오는데 이 뻐전부터 보통 모던 JavaScript라고 한다
        </div>
      </Text>
      <Text>
        <div>- 아직까지 최신 JavaScript를 사용 못하는 브라우저가 존재한다</div>
        <TabTag>
          <div>* 그래서 생긴게 트랜스파일러이다.</div>
          <div>* TypeScript도 트랜스파일러의 한 종류이다</div>
          <div>* JavaScript에서 대표적으로 Babel이 있다</div>
        </TabTag>
      </Text>
    </PostTemplate>
  );
};

export default JavaScript1;
