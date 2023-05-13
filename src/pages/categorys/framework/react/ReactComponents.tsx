import React from "react";
import React1 from "./React1";
import { ReactPost } from "@/datas/ReactPost";

interface Props {
  index?: number;
}

const ReactCom = (props: Props) => {
  const ReactComponents = props.index
    ? [ReactComponent[props.index]]
    : [...ReactComponent].reverse();

  return (
    <>
      {ReactComponents.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default ReactCom;

interface Componets {
  Component: React.FunctionComponent;
}

const ReactComponent: Componets[] = [
  {
    Component: () => {
      return (
        <React1
          Header={ReactPost[0].Header}
          Date={ReactPost[0].Date}
          Tag={ReactPost[0].Tag}
        />
      );
    },
  },
];
