import H1 from "@/pages/PostComponents/H1";
import React, { Children, useState } from "react";
import TextTag from "./TextTag";
import PostLayout from "./PostLayout";
import Spacer from "../components/Spacer";
import ImageTag from "./ImageTag";
import { Col, Row } from "antd";
import Div from "./Div";

interface Post {
  Header: string;
  Date: string;
  Tag: string;
  children: React.ReactNode;
  MainURL?: string;
  SubURL?: string;
}

const PostTemplate = (props: Post) => {
  const [Header, setHeader] = useState(props.Header);
  const [Date, setDate] = useState(props.Date);

  return (
    <div>
      <PostLayout
        Header={Header}
        Date={Date}
        MainURL={props.MainURL}
        SubURL={props.SubURL}
      >
        <div style={{ marginRight: "10px", marginLeft: "10px" }}>
          <TextTag>
            <div
              style={{
                fontSize: "15px",
                color: "#666",
                justifyContent: "end",
                alignItems: "end",
                display: "flex",
              }}
            >
              {Date}
            </div>
          </TextTag>
          <Spacer />
          <H1>
            <div>{Header}</div>
          </H1>
          <Spacer />

          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "end",
            }}
          >
            <img
              src="https://user-images.githubusercontent.com/86397600/236613570-1475d4e4-44b7-4c02-88a3-160e4db52d99.png"
              width={"30px"}
            />
            <TextTag>{`Tag : "${props.Tag}"`}</TextTag>
          </div>
          <Div />
          {props.children}
        </div>
      </PostLayout>
    </div>
  );
};

export default PostTemplate;
