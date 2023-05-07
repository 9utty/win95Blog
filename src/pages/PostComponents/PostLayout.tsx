import React, { useState } from "react";
import { Row, Col, Grid, Divider } from "antd";
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
import PostButton from "../components/PostButton";
import TextTag from "./TextTag";
import Spacer from "../components/Spacer";
import TabTag from "./TabTag";
import Div from "./Div";

interface Props {
  Header: string;
  Date: string;
  children: React.ReactNode;
}

const { useBreakpoint } = Grid;

const PostLayout = ({ Header, Date, children }: Props) => {
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
    <div>
      <PostButton Header={Header} Date={Date} func={openModal} />
      {isVisible && (
        <ModalWrapper>
          <Window
            className="window"
            style={{
              position: "absolute",
              top: screens.md ? "50%" : "0%",
              left: screens.md ? "50%" : "0%",
              width: screens.md ? "80vw" : "99vw",
              height: "60vh",
              transform: screens.md
                ? "translate(-50%, -50%)"
                : "translate(0%, 15%)",
            }}
          >
            <WindowHeader
              className="window-title"
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span style={{ fontFamily: "dunggeunmo-bold", fontSize: "22px" }}>
                {`${Header}`}
              </span>
              <Button style={{ marginTop: "3px" }} onClick={closeModal}>
                <span
                  style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                >
                  X
                </span>
              </Button>
            </WindowHeader>
            <WindowContent>
              <Row>
                <ScrollView
                  shadow={false}
                  style={{ width: "100%", height: "44vh" }}
                >
                  {children}
                  <Spacer />
                  <Spacer />
                  <Spacer />
                  <Spacer />
                  <Div />
                  <TextTag>
                    <TabTag>
                      <TabTag>개인 공부 기록용 블로그입니다</TabTag>
                    </TabTag>
                    <TabTag>
                      <TabTag>잘못된 내용이 있다면 꼭 알려주세요!</TabTag>
                    </TabTag>
                  </TextTag>

                  <Spacer />
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </ModalWrapper>
      )}
    </div>
  );
};

export default PostLayout;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .window {
    width: 400px;
    min-height: 200px;
  }

  .window:nth-child(2) {
    margin: 2rem;
  }

  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;
