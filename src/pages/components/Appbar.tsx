import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
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

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default function Appbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ bottom: "0px" }}>
        <Bar style={{ width: "100vw", height: "49px" }}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: "bold", fontFamily: "dunggeunmo-bold" }}
              >
                <img
                  src={
                    "https://user-images.githubusercontent.com/86397600/236210202-560b7128-fa5a-4fdd-b746-f3c304c977bd.png"
                  }
                  style={{ paddingRight: "5px", width: "20px" }}
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
                  <MenuListItem
                    onClick={() =>
                      (window.location.href = "https://github.com/9utty")
                    }
                  >
                    <span role="img" aria-label="👨‍💻">
                      👨‍💻
                    </span>
                    <div style={{ fontFamily: "dunggeunmo-bold" }}>
                      Profile?
                    </div>
                  </MenuListItem>
                  <MenuListItem
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/9utty/MenuRecommendation")
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
                    <div style={{ fontFamily: "dunggeunmo-bold" }}>Logout?</div>
                  </MenuListItem>
                </MenuList>
              )}
            </div>

            <TextInput
              placeholder="Search..."
              width={150}
              style={{ fontFamily: "dunggeunmo" }}
            />
          </Toolbar>
        </Bar>
      </div>
    </>
  );
}

Appbar.story = {
  name: "default",
};
