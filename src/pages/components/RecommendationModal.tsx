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
} from "react95";
import styled from "styled-components";
import RCButton from "./RCButton";
import Lunch from "./Lunch";
import Dinner from "./Dinner";

const { useBreakpoint } = Grid;

const RecommendationModal = () => {
  const screens = useBreakpoint();
  const [isVisible, setIsVisible] = useState(false);
  const [isLunch, setIsLunch] = useState(false);
  const [isDinner, setIsDinner] = useState(false);

  const openModal = () => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  const onClickLunch = () => {
    setIsDinner(false);
    setIsLunch(true);
  };

  const onClickDinner = () => {
    setIsLunch(false);
    setIsDinner(true);
  };

  return (
    <>
      <RCButton func={openModal} />
      {isVisible && (
        <ModalWrapper>
          <Window
            className="window"
            style={{
              position: "absolute",
              top: screens.md ? "50%" : "0%",
              left: screens.md ? "50%" : "0%",
              width: screens.md ? "80%" : "100%",
              height: screens.md ? "40%" : "50%",
              transform: screens.md
                ? "translate(-50%, -50%)"
                : "translate(0%, 30%)",
            }}
          >
            <WindowHeader
              className="window-title"
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span style={{ fontFamily: "dunggeunmo-bold", fontSize: "22px" }}>
                메뉴추천
              </span>
              <Button style={{ marginTop: "3px" }} onClick={closeModal}>
                <span
                  style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                >
                  X
                </span>
              </Button>
            </WindowHeader>
            <Toolbar>
              <Button
                variant="menu"
                size="sm"
                style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                onClick={onClickLunch}
              >
                점메추
              </Button>
              <Button
                variant="menu"
                size="sm"
                style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}
                onClick={onClickDinner}
              >
                저메추
              </Button>
            </Toolbar>
            <WindowContent>
              {isLunch && isDinner ? (
                <span>메뉴를 클릭하세요</span>
              ) : isLunch ? (
                <Lunch />
              ) : isDinner ? (
                <Dinner />
              ) : null}
            </WindowContent>
          </Window>
        </ModalWrapper>
      )}
    </>
  );
};

export default RecommendationModal;

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
