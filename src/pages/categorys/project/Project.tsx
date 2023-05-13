import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import MyBlogComponents from "./MyBlog/MyBlogComponents";
import MoimComponents from "./Moim/MoimComponents";
import MenuComponents from "./Menu/MenuComponents";
import { MoimPost } from "@/datas/MoimPost";
import { MenuPost } from "@/datas/MenuPost";
import { MyBlogPost } from "@/datas/MyBlog";

const { useBreakpoint } = Grid;

const ProjectCategory = () => {
  const screens = useBreakpoint();

  return (
    <CategoryHeader HeaderName="PROJECT.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName={`Moim.(${MoimPost.length})`}>
            <MoimComponents />
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName={`42Manito.`}>
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName={`42메뉴추천.(${MenuPost.length})`}>
            <MenuComponents />
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName={`Win95Blog.(${MyBlogPost.length})`}>
            <MyBlogComponents />
          </CategoryFolder>
        </Col>
        {/** Category 컴포넌트들 작성 후 나열 */}
      </Row>
    </CategoryHeader>
  );
};

export default ProjectCategory;
