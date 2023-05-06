import React from "react";

interface Props {
  children: React.ReactNode;
}

/** {"String"} 문자열만 쓰기 */
const TabTag = ({ children }: Props) => {
  return (
    <div
      style={{
        marginLeft: "10px",
        fontFamily: "dunggeunmo",
        fontSize: "17px",
        marginTop: "5px",
      }}
    >
      {children}
    </div>
  );
};

export default TabTag;
