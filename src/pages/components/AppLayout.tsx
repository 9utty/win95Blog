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
            <Appbar />
          </div>
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AppLayout;
