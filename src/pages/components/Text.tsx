import React from "react";

type Props = {
  children: React.ReactNode;
};

const Text = ({ children }: Props) => {
  return <div style={{ fontSize: "17px" }}>{children}</div>;
};

export default Text;
