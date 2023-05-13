import JSPost from "@/datas/JSPost";
import { MenuPost } from "@/datas/MenuPost";
import { MoimPost } from "@/datas/MoimPost";
import { MyBlogPost } from "@/datas/MyBlog";
import { NetworkPost } from "@/datas/NetworkPost";
import { ReactPost } from "@/datas/ReactPost";
import TSPost from "@/datas/TSPost";
import { Post } from "@/datas/types/TypePost";
import { Grid, Row } from "antd";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import styled from "styled-components";
import JSCom from "../categorys/lang/javascript/JSComponents";
import TSCom from "../categorys/lang/typescript/TSComponents";
import MoimComponents from "../categorys/project/Moim/MoimComponents";
import MyBlogComponents from "../categorys/project/MyBlog/MyBlogComponents";
import NetworkComponents from "../categorys/network/NetworkComponents";
import ReactCom from "../categorys/framework/react/ReactComponents";
import MenuComponents from "../categorys/project/Menu/MenuComponents";

const { useBreakpoint } = Grid;

const searchMetadata = (metadata: Post[], value: string) => {
  return metadata
    .map((item, index) => {
      if (item.Header.includes(value) || item.Tag.includes(value)) {
        return index;
      } else {
        return -1;
      }
    })
    .filter((index) => index !== -1);
};

const Search = () => {
  const [input, setInput] = useState("");
  const [jsResult, setJsResult] = useState([] as number[]);
  const [tsResult, setTsResult] = useState([] as number[]);
  const [moimResult, setMoimResult] = useState([] as number[]);
  const [myBlogResult, setMyBlogResult] = useState([] as number[]);
  const [networkResult, setNetworkResult] = useState([] as number[]);
  const [reactResult, setReactResult] = useState([] as number[]);
  const [menuResult, setMenuResult] = useState([] as number[]);
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const screens = useBreakpoint();

  const handleSearch = (event: any) => {
    const value = event.target.value;
    setInput(value);

    if (timer) clearTimeout(timer);

    if (value !== "") {
      const newTimer = setTimeout(() => {
        const jsIndex = searchMetadata(JSPost, value);
        setJsResult(jsIndex);
        const tsIndex = searchMetadata(TSPost, value);
        setTsResult(tsIndex);
        const moimIndex = searchMetadata(MoimPost, value);
        setMoimResult(moimIndex);
        const myBlogIndex = searchMetadata(MyBlogPost, value);
        setMyBlogResult(myBlogIndex);
        const networkIndex = searchMetadata(NetworkPost, value);
        setNetworkResult(networkIndex);
        const reactIndex = searchMetadata(ReactPost, value);
        setReactResult(reactIndex);
        const menuIndex = searchMetadata(MenuPost, value);
        setMenuResult(menuIndex);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }, 500);
      setTimer(newTimer);
    } else {
      setJsResult([]);
      setTsResult([]);
      setMoimResult([]);
      setMyBlogResult([]);
      setNetworkResult([]);
      setReactResult([]);
      setMenuResult([]);
      setIsOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setJsResult([]);
    setTsResult([]);
    setMoimResult([]);
    setMyBlogResult([]);
    setNetworkResult([]);
    setReactResult([]);
    setMenuResult([]);
    setInput("");
    document.body.style.overflow = "auto";
  };

  return (
    <div
      style={{
        width: "30vw",
        height: screens.md ? "2rem" : "40px",
        marginBottom: screens.md ? "0.5rem" : "20px",
      }}
    >
      <TextInput
        value={input}
        onChange={handleSearch}
        placeholder="Search..."
        style={{ fontFamily: "dunggeunmo" }}
      />
      {isOpen && (
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
                {`검색`}
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
                  {jsResult.map((index) => {
                    return <JSCom index={index} key={index} />;
                  })}
                  {tsResult.map((index) => {
                    return <TSCom index={index} key={index} />;
                  })}
                  {moimResult.map((index) => {
                    return <MoimComponents index={index} key={index} />;
                  })}
                  {myBlogResult.map((index) => {
                    return <MyBlogComponents index={index} key={index} />;
                  })}
                  {networkResult.map((index) => {
                    return <NetworkComponents index={index} key={index} />;
                  })}
                  {reactResult.map((index) => {
                    return <ReactCom index={index} key={index} />;
                  })}
                  {menuResult.map((index) => {
                    return <MenuComponents index={index} key={index} />;
                  })}
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </ModalWrapper>
      )}
    </div>
  );
};

export default Search;

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
