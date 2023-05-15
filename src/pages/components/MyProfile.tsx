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
import ImageTag from "../PostComponents/ImageTag";

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
            style={{ justifyContent: "space-around", display: "flex" }}
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
                <Div />
                <H2>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "30px" }}>
                      <div>{`Title.`}</div>
                      <TabTag>
                        {`"건강할 건", "배울 학"이란 이름을 가진 개발자 “이건학”입니다.
건강하게 배워서 대체불가한 부품으로 자리매김하여, "이.건.학"이라는 이름이 곧 브랜드가 되는 것이 제 목표입니다.`}
                      </TabTag>
                    </div>
                    <img
                      src={
                        "https://user-images.githubusercontent.com/86397600/237113449-6b8571b7-84eb-4463-88d0-10142af45e7a.jpeg"
                      }
                      width={"200px"}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </H2>
                <Div />
                <H2>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "30px" }}>
                      <div>{`Profile.`}</div>
                      <TabTag>{`* 이건학`}</TabTag>
                      <TabTag>{`* 1992`}</TabTag>
                      <TabTag>{`* 서울시 송파구`}</TabTag>
                      <TabTag>{`* Frontend, Cross Platform`}</TabTag>
                    </div>
                    <div style={{ paddingRight: "30px" }}>
                      <div>{`Contact.`}</div>
                      <TabTag>{`* leegh4250@gmail.com`}</TabTag>
                    </div>
                  </div>
                </H2>
                <H2>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div style={{ paddingRight: "30px" }}>
                      <div>{`Education.`}</div>
                      <TabTag>
                        {`* 한국방송통신대학교 컴퓨터과학과`}
                        <TabTag>{`2022.2 ~ (2023휴학)`}</TabTag>
                      </TabTag>
                      <TabTag>
                        {`* 42Seoul(42Student)`}
                        <TabTag>{`2021.11 ~ ing`}</TabTag>
                      </TabTag>
                    </div>
                  </div>
                </H2>
                <Div />
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
