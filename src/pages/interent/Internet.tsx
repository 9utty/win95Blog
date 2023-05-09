import { Grid } from "antd";
import React, { useState } from "react";
import RCButton from "../components/RCButton";
import Folder from "../components/Folder";

const { useBreakpoint } = Grid;

const Internet = () => {
  const screens = useBreakpoint();
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeMode = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };
  return <Folder func={openModal} />;
};

export default Internet;
