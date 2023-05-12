import { MenuPost } from "@/datas/MenuPost";
import React from "react";
import Menu1 from "./Menu1";

const MenuComponents = () => {
  const MenuCom = [...MenuComponent].reverse();
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
