import React from "react";

interface Props {
  Header: string;
  Date: string;
  func: () => void;
}

const PostButton = (porps: Props) => {
  return (
    <button
      style={{
        width: "100%",
        height: "40px",
        paddingBottom: "5px",
        marginBottom: "5px",
      }}
      onClick={porps.func}
    >
      <div
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://user-images.githubusercontent.com/86397600/236504963-ae3b7e09-7aba-476b-b51b-df402aa5567e.png"
            width="30px"
          />
          <span
            style={{
              marginLeft: "10px",
              fontFamily: "dunggeunmo-bold",
              fontSize: "20px",
            }}
          >
            {porps.Header}
          </span>
        </div>
        <div
          style={{
            fontFamily: "dunggeunmo-bold",
            fontSize: "20px",
          }}
        >
          {porps.Date}
        </div>
      </div>
    </button>
  );
};

export default PostButton;
