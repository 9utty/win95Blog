import React from "react";

type Props = {
  children: React.ReactNode;
};

/** #, ##, ### 처럼 사용하기 */
const H2 = ({ children }: Props) => {
  return (
    <div style={{ fontSize: "26px", fontFamily: "dunggeunmo-bold" }}>
      {children}
    </div>
  );
};

export default H2;
