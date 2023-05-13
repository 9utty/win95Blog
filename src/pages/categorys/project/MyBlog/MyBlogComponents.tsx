import { MyBlogPost } from "@/datas/MyBlog";
import React from "react";
import Win95Blog1 from "./Win95Blog1";
import Win95Blog2 from "./Win95Blog2";

interface Props {
  index?: number;
}

const MyBlogComponents = (props: Props) => {
  const MyBlogCom = props.index
    ? [MyBlogComponent[props.index]]
    : [...MyBlogComponent].reverse();

  return (
    <>
      {MyBlogCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default MyBlogComponents;

interface Componet {
  Component: React.FunctionComponent;
}

const MyBlogComponent: Componet[] = [
  {
    Component: () => {
      return (
        <Win95Blog1
          Header={MyBlogPost[0].Header}
          Date={MyBlogPost[0].Date}
          Tag={MyBlogPost[0].Tag}
        />
      );
    },
  },
  {
    Component: () => {
      return (
        <Win95Blog2
          Header={MyBlogPost[1].Header}
          Date={MyBlogPost[1].Date}
          Tag={MyBlogPost[1].Tag}
        />
      );
    },
  },
];
