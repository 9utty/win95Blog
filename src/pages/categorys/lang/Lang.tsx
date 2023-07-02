import React from "react";
import { Row, Col, Grid } from "antd";
import JSCom from "./JavaScript/JSComponents";
import TSCom from "./TypeScript/TSComponents";
import JSPost from "@/datas/JSPost";
import TSPost from "@/datas/TSPost";
import { useRouter } from "next/router";
import AppLayout from "@/pages/Components/AppLayout";
import CategoryHeader from "@/pages/Components/CategoryHeader";
import CategoryFolder from "@/pages/Components/CategoryFolder";

const { useBreakpoint } = Grid;

interface Component {
  Component: React.FunctionComponent;
}

const LangCategory = () => {
  const screens = useBreakpoint();

  return (
    <AppLayout>
      <CategoryHeader HeaderName="LANGUAGE.">
        <Row>
          {LangComponents.map(({ Component }, index) => {
            return <Component key={index} />;
          })}
          {/** Category 컴포넌트들 작성 후 나열 */}
        </Row>
      </CategoryHeader>
    </AppLayout>
  );
};

const LangComponents: Component[] = [
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName={"JavaScript." + `(${JSPost.length})`}>
            <JSCom />
          </CategoryFolder>
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName={"TypeScript." + `(${TSPost.length})`}>
            <TSCom />
          </CategoryFolder>
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="C.">
            {" "}
            <div></div>
          </CategoryFolder>
        </Col>
      );
    },
  },
];

export default LangCategory;
