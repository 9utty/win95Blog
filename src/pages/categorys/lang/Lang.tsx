import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import JavaScript1 from "./javascript/JavaScript1";
import JavaScript2 from "./javascript/JavaScript2";
import JavaScript3 from "./javascript/JavaScript3";
import JavaScript4 from "./javascript/Javascript4";
import JSCom from "./javascript/JSComponents";

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
