import React, { useState } from "react";
import { Row, Col, Grid } from "antd";
import { ComponentMeta } from "@storybook/react";
import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  Counter,
  ScrollView,
} from "react95";
import styled from "styled-components";
import Folder from "@/pages/components/Folder";
import JavaScript1 from "./javascript/JavaScript1";
import Category from "@/pages/components/CategoryFolder";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import PostButton from "@/pages/components/PostButton";
import PostLayout from "@/pages/PostComponents/PostLayout";
import JavaScript2 from "./javascript/JavaScript2";

const { useBreakpoint } = Grid;

const LangCategory = () => {
  const screens = useBreakpoint();
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <CategoryHeader HeaderName="LANGUAGE.">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <CategoryFolder FolderName="JavaScript.">
            <JavaScript1 />
            <JavaScript2 />
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
