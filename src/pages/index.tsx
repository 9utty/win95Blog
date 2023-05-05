import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import Recommendation from "./components/Recommendation";
import RCButton from "./components/RCButton";
import { Row, Col } from "antd";
import LangCategory from "./categorys/lang/Lang";
import ProgressBars from "./components/ProgressBarMain";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      {" "}
      {isLoading ? (
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
          <ProgressBars func={setIsLoading} />
        </div>
      ) : (
        <div>
          <AppLayout>
            <Row>
              <Col xs={12} sm={8} md={4}>
                <Recommendation />
              </Col>
              <Col xs={12} sm={8} md={4}>
                <LangCategory />
              </Col>
            </Row>
          </AppLayout>
        </div>
      )}
    </div>
  );
};

export default Home;
