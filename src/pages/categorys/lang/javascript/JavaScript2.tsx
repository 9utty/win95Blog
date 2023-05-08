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

const JavaScript2 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>성공적인 프로그래밍에 대해서 생각해보자</H2>
      <Spacer />
      <Spacer />
      <TextTag>
        <div>
          - 모든 프로그래밍 페러다임은 성공적인 프로그래밍을 위해 존재한다
        </div>
      </TextTag>
      <TextTag>
        <div>- 성공적인 프로그래밍은 좋은 프로그램을 만드는 일이다</div>
      </TextTag>
      <TextTag>
        <div>
          - 좋은 프로그램은 사용성, 성능, 확장성, 기획 변경에 대한 대응력 등이
          좋다
        </div>
      </TextTag>
      <TextTag>
        <div>
          - 이것들은 효율적이고 생산적으로 이루는 일이 성공적인 프로그래밍이다
        </div>
      </TextTag>
      <Div />
      <TabTag>
        내가 생각하기에 성공적인 프로그래밍이라고 한다면 위에 내용을 토대로
        생각해보자면 재사용성이 높개 설계를 한 것을 말하는 것 같다
      </TabTag>
      <Div />
      <Spacer />
      <Spacer />
      <H2>함수형 프로그래밍</H2>
      <TextTag>
        <div>
          - 함수형 프로그래밍은 성공적인 프로그래밍을 위해 부수 효과를 미워하고
          조합성을 강조하는 프로그래밍 패러다임이다
        </div>
      </TextTag>
      <TabTag>
        <div>{`* 부수 효과를 미워한다 -> 순수 함수를 만든다`}</div>
      </TabTag>
      <TabTag>
        <div>{`* 조합성을 강조한다 -> 모듈화 수준을 높인다`}</div>
      </TabTag>
      <TabTag>
        <div>{`순수함수?`}</div>
        <TabTag>
          <div>
            {`+ 순수함수란 동일한 값을 인자로 받게 되면 동일한 값으로 리턴해주는 함수를 순수함수라고 한다`}
          </div>
        </TabTag>
      </TabTag>
      <Div />
      <TabTag>
        <div>
          {`모듈화를 말하는 것 같다
          기능별로 모듈을 만들어 놓게 된다면 재사용성도 높힐 수 있고, 유지보수성에서도 좋을 것 같다는 생각을 한다`}
        </div>
      </TabTag>
      <Div />
      <Spacer />
      <Spacer />
      <H2>
        <div>{`순수함수의 예시`}</div>
      </H2>
      <TextTag>
        <CodeTag
          code={`function add(a, b) {
  return a + b;
}

console.log(add(10, 5)); // 15`}
          lang={"javascript"}
        />
      </TextTag>
      <Spacer />
      <Spacer />
      <H2>
        <div>{`비슷하지만 순수함수가 아닌 예시`}</div>
      </H2>
      <TextTag>
        <CodeTag
          code={`var c = 10;
function add(a, b) {
  return a + b + c;
}

console.log(add(10, 5)); // 25
c = 20;
console.log(add(10, 5)); // 35`}
          lang={"javascript"}
        />
      </TextTag>
      <TabTag>
        <div>{`* 이 경우에는 변수 c라는 존재가 있기 때문에 순수함수가 아니라고 할 수 있다.
        만약 c가 변수가 아닌 상수라면 순수함수라고 할 수 있다.`}</div>
      </TabTag>
    </PostTemplate>
  );
};

export default JavaScript2;
