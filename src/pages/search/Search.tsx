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
import AngularPost from "@/datas/AngularPost";
import AngularCom from "../categorys/framework/angular/AngularCom";
import Modal from "../components/ModalWrapper";

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
  const [angularResult, setAngularResult] = useState([] as number[]);
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
        const angularIndex = searchMetadata(AngularPost, value);
        setAngularResult(angularIndex);
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
      setAngularResult([]);
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
    setAngularResult([]);
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
                  {angularResult.map((index) => {
                    return <AngularCom index={index} key={index} />;
                  })}
                </ScrollView>
              </Row>
            </WindowContent>
          </Window>
        </Modal>
      )}
    </div>
  );
};

export default Search;
