import React, { useEffect, useState } from "react";

interface props {
  func: (bool: boolean) => void;
}
const ProgressBars = (props: props) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((previousPercent) => {
        if (previousPercent === 100) {
          props.func(false);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return (
    <div style={{ paddingTop: "100px", width: "100%", height: "30px" }}>
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "5px",
          borderColor: "black",
        }}
      >
        <div
          style={{
            backgroundColor: "#0022ffe8",
            height: "30px",
            width: `${percent}%`,
            position: "relative",
          }}
        >
          <div
            style={{
              color: "white",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              textAlign: "center",
              width: "100%",
            }}
          >
            {Math.floor(percent)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
