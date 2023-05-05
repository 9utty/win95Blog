import React from "react";
import H1 from "./H1";
import Des from "./Des";

interface Props {
  Header: string;
  Des: string;
}

const Preview = (props: Props) => {
  return (
    <div>
      <H1>
        <div>{props.Header}</div>
      </H1>
      <Des>
        <div>{props.Des}</div>
      </Des>
    </div>
  );
};

export default Preview;
