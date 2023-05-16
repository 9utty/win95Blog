import React from "react";
import { ReactPost } from "@/datas/ReactPost";

interface Props {
  index?: number;
}

const AngularCom = (props: Props) => {
  const AngularComponents = props.index
    ? [AngularComponent[props.index]]
    : [...AngularComponent].reverse();

  return (
    <>
      {AngularComponents.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default AngularCom;

interface Componets {
  Component: React.FunctionComponent;
}

const AngularComponent: Componets[] = [
  //   {
  //     Component: () => {
  //       return (
  //         <React1
  //           Header={ReactPost[0].Header}
  //           Date={ReactPost[0].Date}
  //           Tag={ReactPost[0].Tag}
  //         />
  //       );
  //     },
  //   },
];
