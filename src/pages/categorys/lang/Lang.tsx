import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import JSCom from "./javascript/JSComponents";
import TSCom from "./typescript/TSComponents";

const { useBreakpoint } = Grid;

const LangCategory = () => {
  const screens = useBreakpoint();

  return (
    <CategoryHeader HeaderName="LANGUAGE.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="JavaScript.">
            <JSCom />
          </CategoryFolder>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="TypeScript.">
            <TSCom />
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
