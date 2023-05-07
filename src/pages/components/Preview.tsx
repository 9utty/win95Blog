import React from "react";
import H1 from "../PostComponents/H1";
import TextTag from "../PostComponents/TextTag";

interface Props {
  Header: string;
  Text: string;
}

const Preview = (props: Props) => {
  return (
    <div>
      <H1>
        <div>{props.Header}</div>
      </H1>
      <TextTag>
        <div>{props.Text}</div>
      </TextTag>
    </div>
  );
};

export default Preview;
