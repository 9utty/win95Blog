import React from "react";
import JavaScript1 from "@/pages/categorys/lang/javascript/JavaScript1";
import JavaScript2 from "@/pages/categorys/lang/javascript/JavaScript2";
import JavaScript3 from "@/pages/categorys/lang/javascript/JavaScript3";
import JavaScript4 from "@/pages/categorys/lang/javascript/Javascript4";
import JSPost from "@/datas/JSPost";

interface Component {
  Component: React.FunctionComponent;
}

interface Props {
  index?: number;
}

const JSCom = (props: Props) => {
  const JavaScriptComponents = props.index
    ? [JSComponents[props.index]]
    : [...JSComponents].reverse();

  return (
    <>
      {JavaScriptComponents.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

const JSComponents: Component[] = [
  {
    Component: () => {
      return (
        <JavaScript1
          Header={JSPost[0].Header}
          Date={JSPost[0].Date}
          Tag={JSPost[0].Tag}
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <JavaScript2
          Header={JSPost[1].Header}
          Date={JSPost[1].Date}
          Tag={JSPost[1].Tag}
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <JavaScript3
          Header={JSPost[2].Header}
          Date={JSPost[2].Date}
          Tag={JSPost[2].Tag}
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <JavaScript4
          Header={JSPost[3].Header}
          Date={JSPost[3].Date}
          Tag={JSPost[3].Tag}
        />
      );
    },
  },
];

export default JSCom;
