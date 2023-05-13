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

const Win95Blog2 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`일단 내 블로그는 마크다운방식이 아닌 하나의 컴포넌트`}</H2>
      <TextTag>
        {`- 내가 지금 만들어가고 있는 이 블로그는 마크다운 방식이 아닌 하나의 포스팅들이 컴포넌트로 이루어져 있다`}
        <TabTag>
          {`* 이제 슬슬 단점이 보이기 시작한다!`}
          <TabTag>
            <div>
              {`1. 검색기능을 구현하기에는 컴포넌트 단위로 되어 있기 때문에 어렵다`}
            </div>
            <div>
              {`2. 지금은 작은 규모의 블로그이지만 커지면 커질수록 메타데이터를 관리하기가 어려워진다`}
            </div>
          </TabTag>
        </TabTag>
      </TextTag>
      <TextTag>{`- 하지만 장점으로는 너무 이쁘다...👏👏👏👏`}</TextTag>
      <H2>
        {`서론이 길었지만 단점을 극복하면서 검색기능을 구현하기 위해서는?`}
      </H2>
      <TextTag>
        {`- 첫 번째 방법으로는 JSON or md 파일로 메타데이터를 관리한다.`}
        <TabTag>
          {`* 여기서는 여러가지 방법을 해볼 수 있을 것 같다. 예를들면 getStaticProps 를 이용하면서 Serverless를 만들어두고 S3나 이런 저렴한 저장공간을 이용하여 빌드시에만 작동하게 할 수 있다`}
        </TabTag>
        <TabTag>
          {"* 아니면 로컬에 저장을 하고 import해서 사용하는 방법도 있다"}
        </TabTag>
      </TextTag>
      <TextTag>
        {`- 두 번째 방법으로는 메타데이터의 객체를 만들어두고 사용하는 방법이 있겠다`}
        <TabTag>
          {`* 일단 내가 선택한 방법이다`}
          <CodeTag
            code={`// Post[]
			  import { Post } from "./types/TypePost";

const JSPost: Post[] = [
  {
    Header: "JavaScript의 변천사",
    Date: "2023년 05월 05일",
    Tag: "JavaScript",
  },
  {
    Header: "함수형 프로그래밍, 순수함수",
    Date: "2023년 05월 06일",
    Tag: "JavaScript",
  },
  {
    Header: "일급함수, add_maker",
    Date: "2023년 05월 07일",
    Tag: "JavaScript",
  },
  {
    Header: "Promise 기본 개념부터~",
    Date: "2023년 05월 07일",
    Tag: "JavaScript",
  },
];

export default JSPost;

// Component[]
const JSComponents: Component[] = [
	{
	  Component: () => {
		return (
		  <JavaScript1
			Header={JSPost[0].Header}
			Date={JSPost[0].Date}
			Tag={JSPost[0].Tag}
		  />
		);
	  },
	},
	{
	  Component: () => {
		return (
		  <JavaScript2
			Header={JSPost[1].Header}
			Date={JSPost[1].Date}
			Tag={JSPost[1].Tag}
		  />
		);
	  },
	},
	{
	  Component: () => {
		return (
		  <JavaScript3
			Header={JSPost[2].Header}
			Date={JSPost[2].Date}
			Tag={JSPost[2].Tag}
		  />
		);
	  },
	},
	{
	  Component: () => {
		return (
		  <JavaScript4
			Header={JSPost[3].Header}
			Date={JSPost[3].Date}
			Tag={JSPost[3].Tag}
		  />
		);
	  },
	},
  ];
`}
            lang={"javascript"}
          />
          <TabTag>
            {`* 위에 코드를 보면 나는 Post배열을 만들어두고 각각의 컴포넌트도 그에 맞게 배열순서를 가지게 된다`}
          </TabTag>
        </TabTag>
        <TabTag>
          {`* 이렇게 만들어 두면 검색어(keyword)를 Post[]에서 찾아서 해당 인덱스를 알수 있다면 Component에 index를 넘겨주고 해당 컴포넌트를 받을 수 있다고 생각했다`}
        </TabTag>
      </TextTag>
      <H2>{`Search 코드는?`}</H2>
      <TextTag>
        {`- Search에서 가장 중요한 코드인 Metadata를 필터링 하는 함수를 살펴보자`}
      </TextTag>
      <CodeTag
        code={`const searchMetadata = (metadata: Post[], value: string) => {
  return metadata
    .map((item, index) => {
      if (item.Header.includes(value) || item.Tag.includes(value)) {
        return index;
      } else {
        return -1;
      }
    })
    .filter((index) => index !== -1);
};`}
        lang={"javascript"}
      />
      <TabTag>
        {`* 내 블로그에서 모든 메타데이터는 Post type이기 때문에 각각 함수를 만들필요없이 함수로 만들어두고 사용할 수 있다.`}
      </TabTag>
      <TabTag>
        {`* 위에 함수에서는 Metadata 내를 순회돌면서 value(keyword)에 맞는게 있다면 해당 index를 return 하고 아니면 return -1을 한다`}
      </TabTag>
      <TabTag>
        {`* -1이 return 된 요소를 제외하기 위해서 .filter를 이용해 제외를 한다. 이렇게 한다면 만약 못찾았다면 빈배열이 완성이 된다.`}
      </TabTag>
      <TextTag>
        {`- 만약 찾았다면?`}
        <CodeTag
          code={`{jsResult.map((index) => {
                    return <JSCom index={index} key={index} />;
                  })}`}
          lang={"javascript"}
        />
        <TabTag>
          {`* 위에 방식으로 postComponents를 가지고 있는 상위 component를 호출한다`}
        </TabTag>
        <TabTag>
          {`* 이때 props로 index를 주게 된다. 이 인덱스를 기준으로 해당 index에 컴포넌트를 return 받는 만들었다`}
        </TabTag>
      </TextTag>
      <H2>{`물론 더 좋은 방법은 존재할 것이다`}</H2>
      <TextTag>
        {`- 하지만 이 블로그는 나와 같이 성장하는 블로그이기 때문에 괜찮다고 생각한다`}
      </TextTag>
      <TextTag>
        {`- 그리고 하위 카테고리가 추가되지 않는 이상은 Search에 추가 코드를 작성할 필요는 없으니 나름? 편하다 ㅋㅋㅋ`}
      </TextTag>
      <TextTag>
        {`- 아직 해야할 일이 많다... 검색도 정렬기능도 만들어야할 것 같고.. 무튼.. 많다... 오늘ㅇㄴ ㅇ`}
      </TextTag>
    </PostTemplate>
  );
};

export default Win95Blog2;
