import { Grid, Row } from "antd";
import React, { useState } from "react";
import {
  Button,
  Window,
  WindowContent,
  WindowHeader,
  ScrollView,
} from "react95";
import WindowIcon from "../components/WindowIcon";
import Modal from "../components/ModalWrapper";
import { GetStaticProps } from "next";

const HackerNewsURL = "https://api.hnpwa.com/v0/news/1.json";
const { useBreakpoint } = Grid;

const HackerNews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screens = useBreakpoint();

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <WindowIcon
        IconName="해커뉴스"
        func={openModal}
        ImageUrl="https://user-images.githubusercontent.com/86397600/239678037-d00b07a4-5575-4b01-9907-09e69ccce985.png"
      />
      {isOpen && (
        <Modal>
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
                Hacker News
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
                  <div>굿굿</div>
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default HackerNews;

const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(HackerNewsURL);
  const result = await res.json();
  return result;
};
