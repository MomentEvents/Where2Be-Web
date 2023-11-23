import React from "react";

import styles from "./styles.module.scss";

const CirclingLightsBackground = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {children}
      <div className={styles.circlingLightsBackground}></div>
    </div>
  );
};

export default CirclingLightsBackground;
