import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import Recommendation from "./components/Recommendation";
import RCButton from "./components/RCButton";
import { Row, Col } from "antd";
import LangCategory from "./categorys/lang/Lang";
import ProgressBars from "./components/ProgressBarMain";
import ProjectCategory from "./categorys/project/Project";
import FrameWorkCategory from "./categorys/framework/Framework";
import Network from "./categorys/network/Network";
import HackerNews from "./hackerNews/HackerNews";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        backgroundColor: "#008080",
        marginLeft: -8,
        marginRight: -3,
        marginTop: -8,
        marginBottom: -10,
        width: "100vw",
        height: "100vh",
      }}
    >
      {isLoading ? (
        <ProgressBars func={setIsLoading} />
      ) : (
        <div>
          <AppLayout>
            <Row gutter={[0, 30]}>
              {Components.map(({ Component }, index) => {
                return <Component key={index} />;
              })}
            </Row>
          </AppLayout>
        </div>
      )}
    </div>
  );
};

export default Home;

interface Component {
  Component: React.FunctionComponent;
}

const Components: Component[] = [
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <Recommendation />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <HackerNews />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <LangCategory />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <ProjectCategory />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <FrameWorkCategory />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <Network />
        </Col>
      );
    },
  },
];
