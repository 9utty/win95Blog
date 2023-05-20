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
import Modal from "./ModalWrapper";

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
        <Modal>
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
        </Modal>
      )}
    </>
  );
};

export default RecommendationModal;
