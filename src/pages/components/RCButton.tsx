import React from "react";
import { Image } from "antd";

interface props {
  func: () => void;
}

const RCButton = (props: props) => {
  return (
    <button
      style={{
        background: "transparent",
        borderWidth: "0px",
        paddingTop: "10px",
      }}
      onClick={props.func}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          preview={false}
          src="https://user-images.githubusercontent.com/86397600/236210415-d8f91ad6-a5ef-4821-a59d-0e077f5bdef3.png"
          style={{
            width: "50px",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        <span
          style={{
            color: "white",
            paddingLeft: "8px",
            fontFamily: "dunggeunmo-bold",
            fontSize: "20px",
            zIndex: 0,
          }}
        >
          메뉴추천
        </span>
      </div>
    </button>
  );
};

export default RCButton;
