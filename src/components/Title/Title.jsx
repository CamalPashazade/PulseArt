import React from "react";
import styles from "./Title.module.css";

const Title = ({title}) => {
  return <h1 className={styles.h1}>{title}</h1>;
};

export default Title;