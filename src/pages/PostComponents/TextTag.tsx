import { Grid } from "antd";
import React from "react";
type Props = {
  children: React.ReactNode;
};
/** - 내용  처럼 사용하기*/
const { useBreakpoint } = Grid;
const TextTag = ({ children }: Props) => {
  const screens = useBreakpoint();
  return (
    <div
      style={{
        fontSize: screens.md ? "1.3rem" : "20px",
        fontFamily: "dunggeunmo",
        marginTop: "30px",
      }}
    >
      {children}
    </div>
  );
};
export default TextTag;
