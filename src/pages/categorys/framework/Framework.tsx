import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";

const { useBreakpoint } = Grid;

const FrameWorkCategory = () => {
  const screens = useBreakpoint();
  const JavaScriptComponents = [...JSComponents].reverse();

  return (
    <CategoryHeader HeaderName="FRAMEWORK.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="JavaScript.">
            {/* {JavaScriptComponents.map(({ Component }, index) => {
              return <Component key={index} />;
            })} */}
            <div></div>
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

export default FrameWorkCategory;

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
  //   {
  //     Component: () => {
  //       return (
  //         <JavaScript1
  //           Header={JSPost[0].Header}
  //           Date={JSPost[0].Date}
  //           Tag={JSPost[0].Tag}
  //         />
  //       );
  //     },
  //   },
];
