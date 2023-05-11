import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import React1 from "./react/React1";
import { ReactPost } from "@/datas/ReactPost";

const { useBreakpoint } = Grid;

const FrameWorkCategory = () => {
  const screens = useBreakpoint();
  const ReactCom = [...ReactComponents].reverse();

  return (
    <CategoryHeader HeaderName="FRAMEWORK.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="React.">
            {/* {ReactCom.map(({ Component }, index) => {
              return <Component key={index} />;
            })} */}
            {ReactCom.map(({ Component }, index) => {
              return <Component key={index} />;
            })}
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
        {/** Category 컴포넌트들 작성 후 나열 */}
      </Row>
    </CategoryHeader>
  );
};

export default FrameWorkCategory;

interface Componets {
  Component: React.FunctionComponent;
}

const ReactComponents: Componets[] = [
  {
    Component: () => {
      return (
        <React1
          Header={ReactPost[0].Header}
          Date={ReactPost[0].Date}
          Tag={ReactPost[0].Tag}
        />
      );
    },
  },
];
