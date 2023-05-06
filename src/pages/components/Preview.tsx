import React from "react";
import H1 from "../PostComponents/H1";
import Text from "../PostComponents/Text";

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
      <Text>
        <div>{props.Text}</div>
      </Text>
    </div>
  );
};

export default Preview;
