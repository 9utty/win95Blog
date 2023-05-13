import React from "react";
import Moim1 from "./Moim1";
import { MoimPost } from "@/datas/MoimPost";

interface Props {
  index?: number;
}

const MoimComponents = (props: Props) => {
  const MoimCom = props.index
    ? [MoimComponent[props.index]]
    : [...MoimComponent].reverse();

  return (
    <>
      {MoimCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default MoimComponents;

interface Componet {
  Component: React.FunctionComponent;
}

const MoimComponent: Componet[] = [
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
