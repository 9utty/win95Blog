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

const JavaScript4 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>
        <div>{`JavaScript의 Promise`}</div>
      </H2>
      <TextTag>
        <div>{`- 비동기 연산을 다루는 Promise`}</div>
      </TextTag>
      <TextTag>
        <div>{`- Promise는 CallBack 지옥에서 탈출하게 도와줄 수 있다`}</div>
      </TextTag>
      <CodeTag
        code={`function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

consloe.log('start', new Date().toISOString());

delay(1, (result) => {
  console.log("delay", result);
});

console.log('hello');`}
        lang={"javascript"}
      />
      <TextTag>
        <div>
          {`- 위에 코드를 보면 실행 순서는 start -> hello -> delay 가 실행된다`}
        </div>
      </TextTag>
      <TabTag>
        <div>{`- 순서를 보면 delay는 비동기라는걸 알 수 있다`}</div>
      </TabTag>
      <TabTag>
        <div>{`- 하지만 만약 1초단위로 출력하게 만든다면?`}</div>
      </TabTag>
      <CodeTag
        code={`function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

delay(1, (result) => {
  console.log(1, result);
});
delay(1, (result) => {
  console.log(2, result);
});
delay(1, (result) => {
  console.log(3, result);
});`}
        lang={"javascript"}
      />
      <TextTag>
        <div>{`- 이런 코드로 실행한다고 하면 어떻게 실행이 될까?`}</div>
      </TextTag>
      <TextTag>
        <div>
          {`- 비동기일때 시작된 시간은 1, 2, 3의 시간은 비슷하고 1초후에 실행하는건 똑같지만 표현하는 시간은 우리가 흔하게 생각하는 절차지향처럼 드라마틱하게 1이 실행되고 1초 후에 2가 실행되거나 그렇지 않다`}
        </div>
      </TextTag>
      <H2>
        <div>
          {`만약 1 실행하고 2실행하고 3실행 했을때 1초단위로 나오게 유도하려면`}
        </div>
      </H2>
      <CodeTag
        code={`function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

delay(1, (result) => {
  console.log(1, result);
  delay(1, (result) => {
  console.log(2, result);
    delay(1, (result) => {
  console.log(3, result);
});
});
});`}
        lang={"javascript"}
      />
      <TextTag>
        <div>
          {`- 콜백 안에 콜백을 넣게 된다면 내가 원하는 1초후에 1, 1초후에 2, 1초후에 3 이런식으로 출력하게 된다`}
        </div>
      </TextTag>
      <H2>
        <div>{`여기서 만약 코드를 잠깐 수정해보자`}</div>
      </H2>
      <CodeTag
        code={`function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

delay(1, (result) => {
  console.log(1, result);
  delay(1, (result) => {
    delay(1, (result) => {
 			console.log(3, result);
});
    console.log(2, result);
});
});`}
        lang={"javascript"}
      />
      <TextTag>
        <div>
          {`- 마지막 3번 콜백 함수 밑에 console.log(2, result); 를 한다고 했을땐 결과는 어떻게 나올까?`}
        </div>
      </TextTag>
      <TextTag>
        <div>
          {`- 사실은 맨 위에 코드랑 똑같이 동작을 한다`}
          <div>
            {`\n하지만 여기서 문제가 되는건 사람은 보통 코드를 읽을때는 위에서 아래로 읽게 되는데, 이때 흐름상 3이 먼저 실행 되어야 할 것 같은 느낌인데 전혀 다른 결과가 나오게 된다`}
          </div>
        </div>
        <div>{`이 문제를 해결하기 위해 나온게 Promise, async, await 이다`}</div>
      </TextTag>
      <H2>
        <div>{`위에 코드를 Promise 형태로 구현해보자`}</div>
      </H2>
      <CodeTag
        code={`function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

delay(1, (result) => {
  console.log(1, result);
});

function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(new Date().toISOString());
  }, sec * 1000);
  })
}

delayP(1).then((result => {
  console.log(1, result);
}))`}
        lang={"javascript"}
      />
      <TextTag>
        <div>{`- resolve`}</div>
        <TabTag>
          <div>{`* 할일을 다 했을때 호출하는 곳`}</div>
        </TabTag>
      </TextTag>
      <TextTag>
        <div>{`- reject`}</div>
        <TabTag>
          <div>{`* 할일을 하다가 예외가 발생했을 때 호출 하는 곳`}</div>
        </TabTag>
      </TextTag>
      <TextTag>
        <div>
          {`- Promise는 callback 과 다른건 resolve를 호출하게 되는데, 이때 resolve가 호출이 된다면 then((result) => {}) 함수에서 받는 result에 값을 넣어주게 된다`}
        </div>
        <div>{`이걸 실행해서 1초 후에 date가 출력하게 된다`}</div>
      </TextTag>
    </PostTemplate>
  );
};

export default JavaScript4;
