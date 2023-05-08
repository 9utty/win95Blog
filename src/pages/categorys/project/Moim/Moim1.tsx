import CodeTag from "@/pages/PostComponents/Code";
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
        <div>{`Moim이란?`}</div>
      </H2>
      <TextTag>
        <div>{`- 유저는 호스트가 될 수 있고, 게스트가 될 수 있다`}</div>
      </TextTag>
      <TextTag>
        <div>
          {`- 호스트와 게스트와 양방향 서비스로 호스트가 파티를 기획하고 게시글을 작성을 하면, 게스트는 그 게시글을 확인 하고 자신이 원하는 파티일 경우 파티에 참여하는 서비스이다.`}
        </div>
      </TextTag>
      <H2>
        <div>{`Team Moim의 철학?`}</div>
      </H2>
      <TextTag>
        <div>{`1. 기술 부채를 남기지 말자!`}</div>
        <div>{`2. 모두가 처음이다. 다 같이 공부하면서 하자!`}</div>
        <div>{"3. 머지는 무조건 리뷰 후에"}</div>
      </TextTag>
      <H2>
        <div>{`Skill Set.`}</div>
      </H2>
      <TextTag>
        <div>
          {`- React Native, NestJS, TypeORM, AWS S#, AWS EC2, AWS Lambda, AWS RDS`}
        </div>
      </TextTag>
      <H2>
        <div>{`Reference Video.`}</div>
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
