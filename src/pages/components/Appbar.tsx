import { ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Bar } from "react95";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
  styleReset,
} from "react95";
import styled, { createGlobalStyle } from "styled-components";
import MyProfile from "./MyProfile";
import { Grid } from "antd";

interface IWrapperProps {
  screenSize: Record<string, boolean>;
}

const Wrapper = styled.div<IWrapperProps>`
  background: ${({ theme }) => theme.desktopBackground};
  font-size: ${({ screenSize }) => (screenSize.md ? "1.5rem" : "1rem")};
`;

const { useBreakpoint } = Grid;

export default function Appbar() {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const screens = useBreakpoint();
  let textSize;
  const openProfileF = () => {
    setOpenProfile(true);
  };

  const closeProfileF = () => {
    setOpenProfile(false);
  };

  return (
    <>
      <Wrapper screenSize={screens}>
        <div style={{ bottom: "0px" }}>
          <Bar style={{ width: "100vw", height: screens.md ? "3rem" : "50px" }}>
            <Toolbar style={{ justifyContent: "space-between" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Button
                  onClick={() => setOpen(!open)}
                  active={open}
                  style={{
                    fontWeight: "bold",
                    fontFamily: "dunggeunmo-bold",
                    height: screens.md ? "2.5rem" : "40px",
                    width: screens.md ? "6rem" : "17vw",
                    fontSize: screens.md ? "1.2rem" : "18px",
                    marginBottom: screens.md ? "0.5rem" : "20px",
                  }}
                >
                  <img
                    src={
                      "https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png"
                    }
                    style={{
                      paddingRight: "5px",
                      height: screens.md ? "1.6rem" : "20px",
                    }}
                  />
                  Start
                </Button>
                {open && (
                  <MenuList
                    style={{
                      position: "absolute",
                      left: "0",
                      bottom: "100%",
                      width: "30vw",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <MenuListItem onClick={openProfileF}>
                      <span role="img" aria-label="👨‍💻">
                        👨‍💻
                      </span>
                      <div style={{ fontFamily: "dunggeunmo-bold" }}>
                        Profile?
                      </div>
                    </MenuListItem>
                    <MenuListItem
                      onClick={() =>
                        (window.location.href = "https://github.com/9utty")
                      }
                    >
                      <span role="img" aria-label="📁">
                        📁
                      </span>
                      <div
                        style={{
                          fontFamily: "dunggeunmo-bold",
                        }}
                      >
                        GitHub?
                      </div>
                    </MenuListItem>
                    <Separator />
                    <MenuListItem disabled>
                      <span role="img" aria-label="🔙">
                        🔙
                      </span>
                      <div style={{ fontFamily: "dunggeunmo-bold" }}>
                        Logout?
                      </div>
                    </MenuListItem>
                  </MenuList>
                )}
              </div>
              <div
                style={{
                  width: "20vw",
                  height: screens.md ? "2rem" : "40px",
                  marginBottom: screens.md ? "0.5rem" : "20px",
                }}
              >
                <TextInput
                  placeholder="Search..."
                  style={{ fontFamily: "dunggeunmo" }}
                />
              </div>
            </Toolbar>
          </Bar>
          {openProfile && <MyProfile func={closeProfileF} />}
        </div>
      </Wrapper>
    </>
  );
}

Appbar.story = {
  name: "default",
};
