import { Button } from "antd";
import React from "react";
import ImageTag from "../PostComponents/ImageTag";

interface Props {
  FolderName: string;
  func: () => void;
}

const Folder = ({ FolderName, func }: Props) => {
  return (
    <div>
      <button
        style={{
          background: "transparent",
          borderWidth: "0px",
          paddingTop: "10px",
          width: "100px",
        }}
        onClick={func}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            <ImageTag Url="https://user-images.githubusercontent.com/86397600/236442704-86adb1a0-63f3-460a-a138-fcf18906222b.png" />
          </div>
          <span
            style={{
              color: "white",
              paddingLeft: "8px",
              fontFamily: "dunggeunmo-bold",
              fontSize: "20px",
              zIndex: 0,
            }}
          >
            {FolderName}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Folder;
