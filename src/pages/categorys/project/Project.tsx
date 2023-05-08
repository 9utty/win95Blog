import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";

const { useBreakpoint } = Grid;

const ProjectCategory = () => {
  const screens = useBreakpoint();
  const JavaScriptComponents = [...JSComponents].reverse();

  return (
    <CategoryHeader HeaderName="PROJECT.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Moim.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="42Manito.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="42메뉴추천">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Win95Blog">
            <div></div>
          </CategoryFolder>
        </Col>
        {/** Category 컴포넌트들 작성 후 나열 */}
      </Row>
    </CategoryHeader>
  );
};

export default ProjectCategory;

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
  //   {
  //     Component: () => {
  //       return (
  //         <JavaScript2
  //           Header={JSPost[1].Header}
  //           Date={JSPost[1].Date}
  //           Tag={JSPost[1].Tag}
  //         />
  //       );
  //     },
  //   },
  //   {
  //     Component: () => {
  //       return (
  //         <JavaScript3
  //           Header={JSPost[2].Header}
  //           Date={JSPost[2].Date}
  //           Tag={JSPost[2].Tag}
  //         />
  //       );
  //     },
  //   },
  //   {
  //     Component: () => {
  //       return (
  //         <JavaScript4
  //           Header={JSPost[3].Header}
  //           Date={JSPost[3].Date}
  //           Tag={JSPost[3].Tag}
  //         />
  //       );
  //     },
  //   },
];
