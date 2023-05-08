import TextTag from "@/pages/PostComponents/TextTag";
import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import Spacer from "@/pages/components/Spacer";
import React from "react";
import Div from "@/pages/PostComponents/Div";
import TabTag from "@/pages/PostComponents/TabTag";
import CodeTag from "@/pages/PostComponents/Code";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const JavaScript3 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>
        <div>{`일급함수`}</div>
      </H2>
      <Spacer />
      <TextTag>
        <div>{`- JavaScript에서 함수는 일급함수라고 할 수 있다. 함수를 값으로 다룰 수 있고 함수를 변수에 담을 수 있고, 변수에 담은 함수가 변수로 다뤄질 수 있다.`}</div>
      </TextTag>
      <Spacer />
      <Div />
      <TabTag>
        <div>{`쉽게 생각해서 함수를 변수처럼 쓸 수 있다? 가 맞는 것 같다!`}</div>
      </TabTag>
      <Div />
      <Spacer />
      <Spacer />
      <Spacer />
      <H2>
        <div>{`일급함수 예시`}</div>
      </H2>
      <CodeTag
        code={`var f1 = function(a) {  return a * a; };
console.log(f1);

function f3(f) {
  return f();
} // 함수를 받는 일급함수

console.log(f3(function() {return: 10;}));`}
        lang={"javascript"}
      />
      <TabTag>
        <div>
          {`* 순수함수가 아닌 함수들은 평가 시점에 따라 값이 바뀔 수 있다. 하지만 순수함수는 언제 어디서든 똑같은 값을 인자로 준다면 같은 값을 주기때문에 평가의 시점이 중요하지가 않다`}
        </div>
      </TabTag>
      <TabTag>
        <div>{`* 일급함수를 이용해 순수함수들을 사용하고, 순수함수들을 나누어서 만들어가는게 함수형 프로그래밍이라고 할 수 있을 것 같다`}</div>
      </TabTag>
      <Spacer />
      <Spacer />
      <Spacer />
      <H2>
        <div>{`add_maker`}</div>
      </H2>
      <CodeTag
        code={`function add_maker(a) {
  return function(b) {
    return a + b; // 클로저 역할을 하고 있다
  }
}

var add10 = add_maker(10);

console.log(add10(20));`}
        lang={"javascript"}
      />
    </PostTemplate>
  );
};

export default JavaScript3;
