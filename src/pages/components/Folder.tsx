import { Button } from "antd";
import React from "react";
import ImageTag from "./ImageTag";

interface Props {
  FolderName: string;
  func: () => void;
}

const Folder = ({ FolderName, func }: Props) => {
  return (
    <div>
      <Button
        type="primary"
        style={{
          background: "transparent",
        }}
        onClick={func}
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
      </Button>
    </div>
  );
};

export default Folder;
