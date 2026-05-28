import React from "react";
import { Link } from "react-router-dom";
import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Go back to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;