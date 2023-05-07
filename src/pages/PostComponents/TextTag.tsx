import React from "react";
type Props = {
  children: React.ReactNode;
};
/** - 내용  처럼 사용하기*/
const TextTag = ({ children }: Props) => {
  return (
    <div
      style={{ fontSize: "20px", fontFamily: "dunggeunmo", marginTop: "30px" }}
    >
      {children}
    </div>
  );
};
export default TextTag;
