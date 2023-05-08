import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import Moim1 from "./Moim/Moim1";

const { useBreakpoint } = Grid;

const ProjectCategory = () => {
  const screens = useBreakpoint();
  const MoimCom = [...MoimComponents].reverse();

  return (
    <CategoryHeader HeaderName="PROJECT.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Moim.">
            {MoimCom.map(({ Component }, index) => {
              return <Component key={index} />;
            })}
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="42Manito.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="42메뉴추천.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Win95Blog.">
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

const MoimPost: Post[] = [
  {
    Header: "Moim?",
    Date: "2023년 04월 06일",
    Tag: "Project",
  },
];

const MoimComponents: Componets[] = [
  {
    Component: () => {
      return (
        <Moim1
          Header={MoimPost[0].Header}
          Date={MoimPost[0].Date}
          Tag={MoimPost[0].Tag}
        />
      );
    },
  },
];
