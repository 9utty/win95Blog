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

const React1 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`Props는?`}</H2>
      <TextTag>
        {`- React에서 제공하는 Hook으로서 Component안에서 상태를 관리할 수 있게 제공하는 Hook이다`}
      </TextTag>
      <CodeTag
        code={`const [isLoading, setIsLoading] = useState(false);`}
        lang={"javascript"}
      />
      <TabTag>
        <div>{`위에 코드처럼 간단하게 사용할 수 있는 Hook이다`}</div>
        <Spacer />
        <div>
          {`isLoading이라는 State를 Component안에서 관리함으로써 해당 Component에서 사용할 수 있다`}
        </div>
        <Spacer />
        <div>
          {`하지만 하위 Component에게도 props(파라미터)로 넘겨줄 수 있는데, 하위 컴퍼넌트에게 넘겨야할 props가 1~2개 정도라고 한면 타이핑도 적구 문제가 없다고 생각한다`}
        </div>
        <Spacer />
        <div>
          {`But... 만약 넘겨야하는게 10~20개 정도라면? 현재위치 -> 하위 Component -> 하위 Component 가 있다면? 생각만 해도 아찔하다`}
        </div>
      </TabTag>
      <H2>{`Props Drilling?`}</H2>
    </PostTemplate>
  );
};

export default React1;
