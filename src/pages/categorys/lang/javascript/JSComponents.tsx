import React from "react";
import JSPost from "@/datas/JSPost";
import PostButton from "@/pages/Components/PostButton";

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
        <PostButton
          Header={JSPost[0].Header}
          Date={JSPost[0].Date}
          Tag={JSPost[0].Tag}
          filePath="/Categorys/Lang/JavaScript/JavaScript1"
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <PostButton
          Header={JSPost[1].Header}
          Date={JSPost[1].Date}
          Tag={JSPost[1].Tag}
          filePath="/Categorys/Lang/JavaScript/JavaScript2"
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <PostButton
          Header={JSPost[2].Header}
          Date={JSPost[2].Date}
          Tag={JSPost[2].Tag}
          filePath="/Categorys/Lang/JavaScript/JavaScript3"
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <PostButton
          Header={JSPost[3].Header}
          Date={JSPost[3].Date}
          Tag={JSPost[3].Tag}
          filePath="/Categorys/Lang/JavaScript/JavaScript4"
        />
      );
    },
  },
];

export default JSCom;
