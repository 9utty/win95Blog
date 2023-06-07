import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import JSCom from "./javascript/JSComponents";
import TSCom from "./typescript/TSComponents";
import JSPost from "@/datas/JSPost";
import TSPost from "@/datas/TSPost";
import { useRouter } from "next/router";

const { useBreakpoint } = Grid;

interface Component {
  Component: React.FunctionComponent;
}

const LangCategory = () => {
  const screens = useBreakpoint();

  return (
    <CategoryHeader HeaderName="LANGUAGE.">
      <Row>
        {LangComponents.map(({ Component }, index) => {
          return <Component key={index} />;
        })}
        {/** Category 컴포넌트들 작성 후 나열 */}
      </Row>
    </CategoryHeader>
  );
};

const LangComponents: Component[] = [
  {
    Component: () => {
      const router = useRouter();
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
