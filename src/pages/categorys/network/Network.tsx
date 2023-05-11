import React from "react";
import { Grid } from "antd";
import CategoryHeader from "@/pages/components/CategoryHeader";
import NetworkComponents from "./NetworkComponents";

const { useBreakpoint } = Grid;

const Network = () => {
  const screens = useBreakpoint();
  return (
    <CategoryHeader HeaderName="NETWORK.">
      <NetworkComponents />
      {/** Category 컴포넌트들 작성 후 나열 */}
    </CategoryHeader>
  );
};

export default Network;
