import React from "react";
import { Row, Col, Grid } from "antd";
import JavaScript1 from "./javascript/JavaScript1";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import JavaScript2 from "./javascript/JavaScript2";
import JavaScript3 from "./javascript/JavaScript3";
import JavaScript4 from "./javascript/Javascript4";

const { useBreakpoint } = Grid;

const LangCategory = () => {
  const screens = useBreakpoint();
  const JavaScriptComponents = [...JSComponents].reverse();

  return (
    <CategoryHeader HeaderName="LANGUAGE.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="JavaScript.">
            {JavaScriptComponents.map(({ Component }, index) => {
              return <Component key={index} />;
            })}
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="TypeScript.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="C++.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="C.">
            {" "}
            <div></div>
          </CategoryFolder>
        </Col>
        {/** Category 컴포넌트들 작성 후 나열 */}
      </Row>
    </CategoryHeader>
  );
};

export default LangCategory;

interface Componets {
  Component: React.FunctionComponent;
}

interface Post {
  Header: string;
  Date: string;
  Tag: string;
}

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

const JSComponents: Componets[] = [
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
