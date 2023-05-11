import React from "react";
import { Row, Col, Grid } from "antd";
import CategoryFolder from "@/pages/components/CategoryFolder";
import CategoryHeader from "@/pages/components/CategoryHeader";
import { NetworkPost } from "@/datas/NetworkPost";
import Network1 from "./Network/Network1";
import Network2 from "./Network/Netowrk2";

const { useBreakpoint } = Grid;

const Network = () => {
  const screens = useBreakpoint();
  const NetworkCom = [...NetowrkComponents].reverse();
  return (
    <CategoryHeader HeaderName="NETWORK.">
      {NetworkCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
      {/** Category 컴포넌트들 작성 후 나열 */}
    </CategoryHeader>
  );
};

export default Network;

interface Componets {
  Component: React.FunctionComponent;
}

const NetowrkComponents: Componets[] = [
  {
    Component: () => {
      return (
        <Network1
          Header={NetworkPost[0].Header}
          Date={NetworkPost[0].Date}
          Tag={NetworkPost[0].Tag}
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <Network2
          Header={NetworkPost[1].Header}
          Date={NetworkPost[1].Date}
          Tag={NetworkPost[1].Tag}
        />
      );
    },
  },
];
