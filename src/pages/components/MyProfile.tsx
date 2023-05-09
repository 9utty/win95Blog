import { Grid, Row } from "antd";
import React from "react";
import {
  Button,
  ScrollView,
  WindowContent,
  WindowHeader,
  Window,
} from "react95";
import styled from "styled-components";
import Spacer from "./Spacer";
import Div from "../PostComponents/Div";
import TextTag from "../PostComponents/TextTag";
import TabTag from "../PostComponents/TabTag";
import H2 from "../PostComponents/H2";
import CodeTag from "../PostComponents/Code";

const { useBreakpoint } = Grid;

interface Props {
  func: () => void;
}

const MyProfile = ({ func }: Props) => {
  const screens = useBreakpoint();
  return (
    <div>
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
              {`9 U T T Y`}
            </span>
            <Button style={{ marginTop: "3px" }} onClick={func}>
              <span style={{ fontFamily: "dunggeunmo-bold", fontSize: "20px" }}>
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
                <H2>{`나는 ?`}</H2>
              </ScrollView>
            </Row>
          </WindowContent>
        </Window>
      </ModalWrapper>
    </div>
  );
};

export default MyProfile;

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
