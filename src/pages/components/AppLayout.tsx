import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import tokyoDart from "react95/dist/themes/tokyoDark";
import original from "react95/dist/themes/original";
import { Layout, Grid } from "antd";
// UI components
import {
  MenuList,
  MenuListItem,
  Separator,
  styleReset,
  AppBar,
  Frame,
  Bar,
  Button,
} from "react95";
import Appbar from "./Appbar";
import Link from "next/link";
import CategoryHeader from "./CategoryHeader";
import PostLayout from "../PostComponents/PostLayout";
import MyBlog from "./MyBolg";

const { useBreakpoint } = Grid;
type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const screens = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);

  const openBlog = () => {
    setIsOpen(true);
  };
  const closeBlog = () => {
    setIsOpen(false);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ThemeProvider theme={original}>
        <div style={{ height: "91%" }}>
          <div style={{ top: "0px" }}>
            <Bar
              style={{ width: "100vw", height: screens.md ? "2.5rem" : "50px" }}
            >
              <Button
                onClick={openBlog}
                style={{
                  width: "30vw",
                  height: screens.md ? "2.3rem" : "45px",
                }}
              >
                <div
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "30vw",
                    transform: "translate(0%,0%)",
                    fontSize: screens.md ? "1.6rem" : "20px",
                    fontFamily: "dunggeunmo-bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  구티 BLOG.
                </div>
              </Button>

              {isOpen && <MyBlog func={closeBlog} />}
            </Bar>
          </div>
          {children}
        </div>
        <Appbar />
      </ThemeProvider>
    </div>
  );
};

export default AppLayout;
