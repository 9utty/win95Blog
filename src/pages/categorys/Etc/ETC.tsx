import React from "react";
import { Grid } from "antd";
import CategoryHeader from "@/pages/Components/CategoryHeader";
import { NetworkPost } from "@/datas/NetworkPost";

const { useBreakpoint } = Grid;

const ETC = () => {
  const screens = useBreakpoint();
  return (
    <CategoryHeader HeaderName={"ETC." + `(${EtcPosts.length})`}>
      <NetworkComponents />
      {/** Category 컴포넌트들 작성 후 나열 */}
    </CategoryHeader>
  );
};

export default ETC;
