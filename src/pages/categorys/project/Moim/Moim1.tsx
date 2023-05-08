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
        <div>
          {`- "Moim"은 양방향 서비스로, Host가 이벤트를 생성하고 Guest는 Host가 생성한 이벤트 게시글을 확인하고 참여할 수 있는 앱이다`}
          {` 프로젝트 내에서는 사용자의 위치와 사진 등의 정보를 받을 수 있다`}
        </div>
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
