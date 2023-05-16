import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import React1 from "./react/React1";
import { ReactPost } from "@/datas/ReactPost";
import ReactCom from "./react/ReactComponents";
import AngularCom from "./angular/AngularCom";

const { useBreakpoint } = Grid;

const FrameWorkCategory = () => {
  const screens = useBreakpoint();

  return (
    <CategoryHeader HeaderName="FRAMEWORK.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName={"React." + `(${ReactPost.length})`}>
            <ReactCom />
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="React Native.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Next JS.">
            <div></div>
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="Angular.">
            <AngularCom />
          </CategoryFolder>
        </Col>
        {/** Category 컴포넌트들 작성 후 나열 */}
      </Row>
    </CategoryHeader>
  );
};

export default FrameWorkCategory;
