import React, { Children, useState } from "react";
import Folder from "./Folder";
import styled from "styled-components";
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
import { Grid, Row, Col } from "antd";
import Preview from "./Preview";
import ImageTag from "../PostComponents/ImageTag";
import Modal from "./ModalWrapper";

interface Props {
  FolderName: string;
  children: React.ReactNode;
}

const { useBreakpoint } = Grid;

const CategoryFolder = ({ FolderName, children }: Props) => {
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
      <Folder FolderName={FolderName} func={openModal} />
      {isVisible && (
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
                {`${FolderName}`}
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
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default CategoryFolder;
