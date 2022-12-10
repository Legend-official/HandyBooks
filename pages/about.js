import React from "react";
import Head from "next/head";
import Button from "../Components/Small/Button";
import styles from "../styles/About.module.css";

import { BotIcon, KeyIcon } from "../Components/Icons";

const About = () => {
  const onButtonPress = () => {
    console.log("hello");
  };
  return (
    <div className={styles.maincontainer}>
      <div>
        About page
      </div>
    </div>
  );
};

export default About;
