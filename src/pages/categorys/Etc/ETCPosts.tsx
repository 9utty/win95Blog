import React from "react";

interface Props {
  index?: number;
}

const ETCComponents = (props: Props) => {
  const ETCCom = props.index
    ? [ETCComponent[props.index]]
    : [...ETCComponent].reverse();

  return (
    <>
      {ETCCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default ETCComponents;

interface Componet {
  Component: React.FunctionComponent;
}

const ETCComponent: Componet[] = [
  {
    Component: () => {
      return (
        <Career
          Header={NetworkPost[0].Header}
          Date={NetworkPost[0].Date}
          Tag={NetworkPost[0].Tag}
        />
      );
    },
  },
];
