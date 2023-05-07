import React from "react";
import Spacer from "../components/Spacer";

type Props = {
  children: React.ReactNode;
};

/** #, ##, ### 처럼 사용하기 */
const H2 = ({ children }: Props) => {
  return (
    <div style={{ fontSize: "26px", fontFamily: "dunggeunmo-bold" }}>
      <Spacer />
      <Spacer />
      <Spacer />
      {children}
      <Spacer />
    </div>
  );
};

export default H2;
