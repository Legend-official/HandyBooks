import React from "react";
import styles from "../styles/404.module.css";
import Image from "next/image";
import ufo from "../assests/ufo.png";

const PageNotFound = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image className={styles.ufoimage} src={ufo} width="350px" height="300px"></Image>
      </div>
      <div className={styles.text}>
        <span className={styles.errortext}>404</span>
        <span className={styles.pagenotfound}>Page Not Found</span>
        <span className={styles.stolen}>No fuel to load the page</span>
      </div>
    </div>
  );
};

export default PageNotFound;
