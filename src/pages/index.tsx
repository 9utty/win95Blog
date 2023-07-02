import React, { useState } from "react";
import AppLayout from "./Components/AppLayout";
import ProgressBars from "./Components/ProgressBarMain";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        backgroundColor: "#008080",
        marginLeft: -8,
        marginRight: -3,
        marginTop: -8,
        marginBottom: -10,
        width: "100vw",
        height: "100vh",
      }}
    >
      {isLoading ? (
        <ProgressBars func={setIsLoading} />
      ) : (
        <div>
          <AppLayout>
            <div></div>
          </AppLayout>
        </div>
      )}
    </div>
  );
};

export default Home;
