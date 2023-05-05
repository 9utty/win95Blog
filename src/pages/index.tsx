import React from "react";
import AppLayout from "./components/AppLayout";
import Recommendation from "./components/Recommendation";
import RCButton from "./components/RCButton";

const Home = () => {
  return (
    <div>
      <AppLayout>
        <Recommendation />
      </AppLayout>
    </div>
  );
};

export default Home;
