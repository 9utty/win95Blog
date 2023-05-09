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

const TypeScript1 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`기본 지식`}</H2>
      <TextTag>
        {`- 메인 룰 : TypeScript는 최종적으로 JavaScript로 변환된다`}
        <TabTag>
          {`* 순전한 TypeScript코드를 돌릴 수 있는 것은 deno가 있는데, 대중화 되지 않음`}
        </TabTag>
        <TabTag>{`* 브라우저, 노드는 모두 .js 파일을 실행한다`}</TabTag>
      </TextTag>
      <TextTag>
        {`- TypeScript는 언어이자 컴파일러(tsc)이다`}
        <TabTag>{`* 컴파일러는 ts 코드를 js로 바꿔준다`}</TabTag>
      </TextTag>
      <TextTag>
        {`- tsc는 tsconfig.json(tsc -lint 시 생성)에 따라 ts 코드를 js(tsc 시 생성)로 바꿔준다`}
        <TabTag>
          {`* 인풋인 ts와 아웃풋인 js모두에 영향을 끼치므로 tsconfig.json 설정을 반드시 봐야한다`}
        </TabTag>
      </TextTag>
      <TextTag>
        {`- 단순히 타입 검사만 하고 싶다면 tsc -noEmit 하면 됨`}
      </TextTag>
      <Spacer />
      <Spacer />
      <TextTag>
        {`- 위에서 가장 중요한건 TypeScript는 JavaScript로 변환된다는 내용이다`}
        <TabTag>
          {`* TypeScript로 아무리 코딩을 해봐야 브라우저나 Node.JS는 TypeScript를 알지 못한다.. 이게 가장 중요한 TypeScript의 개념이다!!`}
        </TabTag>
      </TextTag>
    </PostTemplate>
  );
};

export default TypeScript1;
