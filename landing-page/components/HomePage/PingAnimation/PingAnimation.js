import React from "react";
import styles from "./PingAnimation.module.css";

const PingAnimation = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heartbeat}></span>
      <span className={styles.dot}></span>
    </div>
  );
};

export default PingAnimation;
