import React from "react";
import Network1 from "./Network/Network1";
import Network2 from "./Network/Network2";
import { NetworkPost } from "@/datas/NetworkPost";
import Network3 from "./Network/Network3";
import Network4 from "./Network/Network4";

interface Props {
  index?: number;
}

const NetworkComponents = (props: Props) => {
  const NetworkCom = props.index
    ? [NetowrkComponent[props.index]]
    : [...NetowrkComponent].reverse();

  return (
    <>
      {NetworkCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default NetworkComponents;

interface Componet {
  Component: React.FunctionComponent;
}

const NetowrkComponent: Componet[] = [
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
  {
    Component: () => {
      return (
        <Network3
          Header={NetworkPost[2].Header}
          Date={NetworkPost[2].Date}
          Tag={NetworkPost[2].Tag}
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <Network4
          Header={NetworkPost[3].Header}
          Date={NetworkPost[3].Date}
          Tag={NetworkPost[3].Tag}
        />
      );
    },
  },
];
