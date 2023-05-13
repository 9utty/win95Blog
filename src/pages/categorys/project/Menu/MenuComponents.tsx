import { MenuPost } from "@/datas/MenuPost";
import React from "react";
import Menu1 from "./Menu1";

interface Props {
  index?: number;
}

const MenuComponents = (props: Props) => {
  const MenuCom = props.index
    ? [MenuComponent[props.index]]
    : [...MenuComponent].reverse();

  return (
    <>
      {MenuCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default MenuComponents;

interface Componets {
  Component: React.FunctionComponent;
}

const MenuComponent: Componets[] = [
  {
    Component: () => {
      return (
        <Menu1
          Header={MenuPost[0].Header}
          Date={MenuPost[0].Date}
          Tag={MenuPost[0].Tag}
        />
      );
    },
  },
];
