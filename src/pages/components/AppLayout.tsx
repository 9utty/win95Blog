import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import tokyoDart from "react95/dist/themes/tokyoDark";
import original from "react95/dist/themes/original";
import { Layout } from "antd";
// UI components
import {
  MenuList,
  MenuListItem,
  Separator,
  styleReset,
  AppBar,
  Frame,
} from "react95";
import Appbar from "./Appbar";

const { Footer } = Layout;
type Props = {
  children: React.ReactNode;
};

const Background = styled.div`
  background-color: #008080;
  width: 100vw;
  height: 100vh;
`;

const AppLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#008080",
        marginLeft: -8,
        marginRight: -3,
        marginTop: -8,
        marginBottom: -10,
        width: "100vw",
        height: "100vh",
      }}
    >
      <ThemeProvider theme={original}>
        <div
          style={{
            width: "100%",
            height: "93.8%",
          }}
        >
          {children}
        </div>
        <Appbar />
      </ThemeProvider>
    </div>
  );
};

export default AppLayout;
