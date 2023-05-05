import React from "react";

type Props = {
  children: React.ReactNode;
};

/** #, ##, ### 처럼 사용하기 */
const H1 = ({ children }: Props) => {
  return (
    <div style={{ fontSize: "30px", fontFamily: "dunggeunmo-bold" }}>
      {children}
    </div>
  );
};
