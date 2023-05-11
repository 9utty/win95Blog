import { MyBlogPost } from "@/datas/MyBlog";
import React from "react";
import Win95Blog1 from "./Win95Blog1";

const MyBlogComponents = () => {
  const MyBlogCom = [...MyBlogComponent].reverse();
  return (
    <>
      {MyBlogCom.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

export default MyBlogComponents;

interface Componets {
  Component: React.FunctionComponent;
}

const MyBlogComponent: Componets[] = [
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
];
