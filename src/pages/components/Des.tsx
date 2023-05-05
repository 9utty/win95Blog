import React from "react";
type Props = {
  children: React.ReactNode;
};
/** - 내용  처럼 사용하기*/
const Des = ({ children }: Props) => {
  return (
    <div
      style={{ fontSize: "20px", fontFamily: "dunggeunmo", marginTop: "10px" }}
    >
      {children}
    </div>
  );
};
export default Des;
