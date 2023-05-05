import React from "react";
import AppLayout from "./components/AppLayout";
import Recommendation from "./components/Recommendation";
import RCButton from "./components/RCButton";
import { Row, Col } from "antd";
import LangCategory from "./categorys/lang/Lang";

const Home = () => {
  return (
    <div>
      <AppLayout>
        <Row>
          <Col xs={6} sm={6} md={4}>
            <Recommendation />
          </Col>
          <Col xs={6} sm={6} md={4}>
            <LangCategory />
          </Col>
        </Row>
      </AppLayout>
    </div>
  );
};

export default Home;
