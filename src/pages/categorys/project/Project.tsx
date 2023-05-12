import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import MyBlogComponents from "./MyBlog/MyBlogComponents";
import MoimComponents from "./Moim/MoimComponents";
import MenuComponents from "./Menu/MenuComponents";

const { useBreakpoint } = Grid;

const ProjectCategory = () => {
  const screens = useBreakpoint();

  return (
    <CategoryHeader HeaderName="PROJECT.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Moim.">
            <MoimComponents />
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="42Manito.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="42메뉴추천.">
            <MenuComponents />
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Win95Blog.">
            <MyBlogComponents />
          </CategoryFolder>
        </Col>
        {/** Category 컴포넌트들 작성 후 나열 */}
      </Row>
    </CategoryHeader>
  );
};

export default ProjectCategory;
