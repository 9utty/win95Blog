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

const Win95Blog1 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>{`구티의 블로그를 소개합니다!`}</H2>
      <TextTag>
        {`- 이 블로그는 Window95 스타일로 만들고자 react95(스타일컴포넌트)를 사용해 만들고, NextJS를 이용해 정적페이지로 빌드 후에 Netlify를 이용해 배포하는 블로그입니다`}
      </TextTag>
      <H2>{`하나하나의 포스팅은?`}</H2>
      <TextTag>{`- 하나하나 포스팅은 컴포넌트로 만들어졌습니다`}</TextTag>
      <CodeTag
        code={`import CodeTag from "@/pages/PostComponents/Code";
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

const PostForm = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <div></div>
    </PostTemplate>
  );
};

export default PostForm;
`}
        lang={"javascript"}
      />
      <TabTag>
        {`* 이런식의 Form 을 만들어두고 각각 필요한 컴포넌트들 마크다운처럼 보이기 위해서 재사용 가능한 컴포넌트들을 만들어서 사용했습니다`}
      </TabTag>
      <TabTag>{`H1, H2, H3, TextTag, ImageTag, TabTag, CodeTag 등`}</TabTag>
      <H2>{`예시 코드`}</H2>
      <CodeTag
        code={`import CodeTag from "@/pages/PostComponents/Code";
import Div from "@/pages/PostComponents/Div";
import H2 from "@/pages/PostComponents/H2";
import PostTemplate from "@/pages/PostComponents/PostTemplate";
import TabTag from "@/pages/PostComponents/TabTag";
import TextTag from "@/pages/PostComponents/TextTag";
import Spacer from "@/pages/components/Spacer";
import Link from "next/link";
import React from "react";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

const Moim1 = ({ Header, Date, Tag }: Post) => {
  return (
    <PostTemplate Header={Header} Date={Date} Tag={Tag}>
      <H2>
        <div>{"Moim이란?"}</div>
      </H2>
      <TextTag>
        <div>{"- 유저는 호스트가 될 수 있고, 게스트가 될 수 있다"}</div>
      </TextTag>
      <TextTag>
        <div>
          {"- 호스트와 게스트와 양방향 서비스로 호스트가 파티를 기획하고 게시글을 작성을 하면, 게스트는 그 게시글을 확인 하고 자신이 원하는 파티일 경우 파티에 참여하는 서비스이다."}
        </div>
      </TextTag>
      <H2>
        <div>{"Team Moim의 철학?"}</div>
      </H2>
      <TextTag>
        <div>{"1. 기술 부채를 남기지 말자!"}</div>
        <div>{"2. 모두가 처음이다. 다 같이 공부하면서 하자!"}</div>
        <div>{"3. 머지는 무조건 리뷰 후에"}</div>
      </TextTag>
      <H2>
        <div>{"Skill Set."}</div>
      </H2>
      <TextTag>
        <div>
          {"- React Native, NestJS, TypeORM, AWS S#, AWS EC2, AWS Lambda, AWS RDS"}
        </div>
      </TextTag>
      <H2>
        <div>{"Reference Video."}</div>
      </H2>
      <TabTag>
        <div>
          <a
            href={
              "https://drive.google.com/file/d/1SRrFTn9L9dA58qhW9yqtta2xVDDNeg5A/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            보기
          </a>
        </div>
      </TabTag>
    </PostTemplate>
  );
};

export default Moim1;
`}
        lang={"javascript"}
      />
      <Div />
      <TabTag>
        {`이렇게 만들게 된 이유?`}
        <TabTag>{`1. Window95 스타일의 블로그를 만들어보고 싶어서`}</TabTag>
        <TabTag>{`2. 컴포넌트 제작에 익숙해 지기 위해서`}</TabTag>
      </TabTag>
      <Spacer />
      <TabTag>
        {`이렇게 하면서 좋은 점`}
        <TabTag>
          {`1. 재사용성이 좋은 컴포넌트들을 어떻게 만들어야하는지 경험해볼 수 있다`}
        </TabTag>
        <TabTag>
          {`2. 페이지를 어떻게 배포해야하는지 간접경험을 해볼 수 있다`}
        </TabTag>
        <TabTag>{`3. 내 마음대로 꾸며가는 재미가 확실히 있다`}</TabTag>
      </TabTag>
      <Div />
      <TextTag>
        {`보기에 안좋은 블로그일 순 있지만 저의 개인 블로그이며, 저한테는 아름다운 친구입니다! 잘부탁드립니다!😍`}
      </TextTag>
    </PostTemplate>
  );
};

export default Win95Blog1;
