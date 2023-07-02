import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import { Grid, Row, Col } from "antd";
// UI components
import Recommendation from "./Recommendation";
import HackerNews from "../HackerNews/HackerNews";
import CategoryIcon from "./CategoryIcon";
import Appbar from "./Appbar";

const { useBreakpoint } = Grid;

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const screens = useBreakpoint();

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
      <ThemeProvider theme={original}>
        <div style={{ height: "91%" }}>
          <div style={{ top: "0px" }}>
            <Appbar />
          </div>
          <Row gutter={[0, 30]}>
            {Components.map(({ Component }, index) => {
              return <Component key={index} />;
            })}
          </Row>
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AppLayout;

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
          <CategoryIcon IconName="Language." filePath="/Categorys/Lang/Lang" />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <CategoryIcon
            IconName="Project."
            filePath="/Categorys/Project/Project"
          />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <CategoryIcon
            IconName="Framework."
            filePath="/Categorys/Framework/Framework"
          />
        </Col>
      );
    },
  },
  {
    Component: () => {
      return (
        <Col xs={12} sm={8} md={4}>
          <CategoryIcon
            IconName="Network."
            filePath="/Categorys/Network/Network"
          />
        </Col>
      );
    },
  },
];
