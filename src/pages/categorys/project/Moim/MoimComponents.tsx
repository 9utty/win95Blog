import React from "react";
import Moim1 from "./Moim1";
import { MoimPost } from "@/datas/MoimPost";

const MoimComponents = () => {
  const MoimCom = [...MoimComponent].reverse();
  return (
    <>
      {MoimCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default MoimComponents;

interface Componets {
  Component: React.FunctionComponent;
}

const MoimComponent: Componets[] = [
  {
    Component: () => {
      return (
        <Moim1
          Header={MoimPost[0].Header}
          Date={MoimPost[0].Date}
          Tag={MoimPost[0].Tag}
        />
      );
    },
  },
];
